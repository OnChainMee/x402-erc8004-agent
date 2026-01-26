import { providerErrors, rpcErrors } from "@metamask/rpc-errors";

import { DEFAULT_CHAIN_ID } from "./constants";
import {
  AppContext,
  type AppMetadata,
  GeminiSdkEvent,
  type GeminiSdkMessage,
  type GeminiSdkMessageResponse,
} from "./types";
import { closePopup, openPopup, SDK_BACKEND_URL, SDK_VERSION } from "./utils";

type CommunicatorConfigParams = {
  appMetadata: AppMetadata;
  onDisconnectCallback?: () => void;
};

// creates and communicates with a popup window to send and receive messages
export class Communicator {
  private readonly appMetadata: AppMetadata;
  private readonly url: URL;
  private popup: Window | null = null;
  private listeners = new Map<(_: MessageEvent) => void, { reject: (_: Error) => void }>();
  private onDisconnectCallback?: () => void;

  constructor({ appMetadata, onDisconnectCallback }: CommunicatorConfigParams) {
    this.url = new URL(SDK_BACKEND_URL);
    this.appMetadata = appMetadata;
    this.onDisconnectCallback = onDisconnectCallback;
  }

  // posts a message to the popup window
  postMessage = async (message: GeminiSdkMessage) => {
    const popup = await this.waitForPopupLoaded();
    popup.postMessage(message, this.url.origin);
  };

  // posts a request to the popup window and waits for a response
  postRequestAndWaitForResponse = async <M extends GeminiSdkMessage, R extends GeminiSdkMessageResponse>(
    request: GeminiSdkMessage,
  ): Promise<R> => {
    const responsePromise = this.onMessage<M, R>(({ requestId }) => requestId === request.requestId);
    this.postMessage(request);
    return await responsePromise;
  };

  // listens for messages from the popup window that match a given predicate
  onMessage = <M extends GeminiSdkMessage, R extends GeminiSdkMessageResponse>(
    predicate: (_: Partial<M>) => boolean,
  ): Promise<R> => {
    return new Promise((resolve, reject) => {
      const listener = (event: MessageEvent<M>) => {
        // ensure origin of message
        if (event.origin !== this.url.origin) return;

        const message = event.data;
        if (predicate(message)) {
          resolve(message as unknown as R);
          window.removeEventListener("message", listener);
          this.listeners.delete(listener);
        }
      };

      window.addEventListener("message", listener);
      this.listeners.set(listener, { reject });
    });
  };

  // closes the popup, rejects all requests and clears event listeners
  private onRequestCancelled = () => {
    closePopup(this.popup);
    this.popup = null;

    this.listeners.forEach(({ reject }, listener) => {
      reject(providerErrors.userRejectedRequest());
      window.removeEventListener("message", listener);
    });
    this.listeners.clear();
  };

  // waits for the popup window to fully load and then sends a version message
  waitForPopupLoaded = (): Promise<Window> => {
    if (this.popup && !this.popup.closed) {
      // in case the user un-focused the popup between requests, focus it again
      this.popup.focus();
      return Promise.resolve(this.popup);
    }

    this.popup = openPopup(this.url);

    // setup popup closed listener in case user closes window without explicit response
    this.onMessage<GeminiSdkMessage, GeminiSdkMessageResponse>(({ event }) => event === GeminiSdkEvent.POPUP_UNLOADED)
      .then(this.onRequestCancelled)
      .catch(() => {});

    // setup account disconnect listener in case user requests disconnect from within popup
    this.onMessage<GeminiSdkMessage, GeminiSdkMessageResponse>(({ event }) => event === GeminiSdkEvent.SDK_DISCONNECT)
      .then(() => {
        // invoke disconnect callback passed in from wallet
        this.onDisconnectCallback?.();
        // cleanup remaining event listeners
        this.onRequestCancelled();
      })
      .catch(() => {});

    return this.onMessage<GeminiSdkMessage, GeminiSdkMessageResponse>(
      ({ event }) => event === GeminiSdkEvent.POPUP_LOADED,
    )
      .then(message => {
        // report app metadata to backend upon load complete
        this.postMessage({
          chainId: DEFAULT_CHAIN_ID,
          data: {
            appMetadata: this.appMetadata,
            origin: window.location.origin,
            sdkVersion: SDK_VERSION,
          } as AppContext,
          event: GeminiSdkEvent.POPUP_APP_CONTEXT,
          origin: window.location.origin,
          requestId: message.requestId,
        });
      })
      .then(() => {
        if (!this.popup) throw rpcErrors.internal();
        return this.popup;
      });
  };
}
