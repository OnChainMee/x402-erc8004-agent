import { providerErrors } from "@metamask/rpc-errors";
import { afterEach, beforeEach, describe, expect, it, mock, spyOn } from "bun:test";

import { Communicator } from "./communicator";
import { DEFAULT_CHAIN_ID } from "./constants";
import { AppMetadata, GeminiSdkEvent, GeminiSdkMessage, GeminiSdkMessageResponse } from "./types";
import { SDK_BACKEND_URL, SDK_VERSION } from "./utils";

// Set up global window mock before tests
(global as any).window = {
  addEventListener: () => {},
  location: {
    origin: "http://localhost:3000",
  },
  removeEventListener: () => {},
};

// Mock window.open
const mockPopup = {
  closed: false,
  focus: mock(),
  location: { href: SDK_BACKEND_URL },
  postMessage: mock(),
};

// Mock utils
mock.module("./utils", () => ({
  SDK_BACKEND_URL,
  SDK_VERSION: "1.0.0",
  closePopup: mock(),
  openPopup: mock(() => mockPopup),
}));

describe("Communicator", () => {
  let communicator: Communicator;
  let appMetadata: AppMetadata;
  let onDisconnectCallback: ReturnType<typeof mock>;
  let messageListeners: Array<(event: MessageEvent) => void> = [];

  // Helper to simulate message events
  const simulateMessage = (data: any, origin: string = new URL(SDK_BACKEND_URL).origin) => {
    const event = new MessageEvent("message", { data, origin });
    messageListeners.forEach(listener => listener(event));
  };

  beforeEach(() => {
    // Reset mocks
    mock.restore();
    messageListeners = [];
    mockPopup.postMessage.mockClear();
    mockPopup.focus.mockClear();
    mockPopup.closed = false;

    // Mock window event listeners
    spyOn(window, "addEventListener").mockImplementation((event: string, listener: any) => {
      if (event === "message") {
        messageListeners.push(listener);
      }
    });

    spyOn(window, "removeEventListener").mockImplementation((event: string, listener: any) => {
      if (event === "message") {
        const index = messageListeners.indexOf(listener);
        if (index > -1) {
          messageListeners.splice(index, 1);
        }
      }
    });

    appMetadata = {
      icon: "https://test.com/icon.png",
      name: "Test App",
    };

    onDisconnectCallback = mock();

    communicator = new Communicator({
      appMetadata,
      onDisconnectCallback,
    });
  });

  afterEach(() => {
    messageListeners = [];
  });

  describe("constructor", () => {
    it("should initialize with app metadata", () => {
      expect(communicator).toBeDefined();
    });

    it("should store disconnect callback", () => {
      const customCallback = mock();
      const customCommunicator = new Communicator({
        appMetadata,
        onDisconnectCallback: customCallback,
      });
      expect(customCommunicator).toBeDefined();
    });
  });

  describe("waitForPopupLoaded", () => {
    it("should open popup and wait for load event", async () => {
      const popupPromise = communicator.waitForPopupLoaded();

      // Simulate popup loaded event
      simulateMessage({
        event: GeminiSdkEvent.POPUP_LOADED,
        requestId: "test-request-id",
      });

      const popup = await popupPromise;
      expect(popup).toBe(mockPopup);
    });

    it("should send app context after popup loads", async () => {
      const popupPromise = communicator.waitForPopupLoaded();

      simulateMessage({
        event: GeminiSdkEvent.POPUP_LOADED,
        requestId: "test-request-id",
      });

      await popupPromise;

      expect(mockPopup.postMessage).toHaveBeenCalledWith(
        expect.objectContaining({
          chainId: DEFAULT_CHAIN_ID,
          data: expect.objectContaining({
            appMetadata,
            origin: window.location.origin,
            sdkVersion: SDK_VERSION,
          }),
          event: GeminiSdkEvent.POPUP_APP_CONTEXT,
        }),
        new URL(SDK_BACKEND_URL).origin,
      );
    });

    it("should focus existing popup if already open", async () => {
      // First open
      const popupPromise1 = communicator.waitForPopupLoaded();
      simulateMessage({
        event: GeminiSdkEvent.POPUP_LOADED,
        requestId: "req1",
      });
      await popupPromise1;

      // Second call should focus existing
      mockPopup.focus.mockClear();
      const popup2 = await communicator.waitForPopupLoaded();

      expect(mockPopup.focus).toHaveBeenCalled();
      expect(popup2).toBe(mockPopup);
    });

    it("should reopen popup if previous was closed", async () => {
      // First open
      const popupPromise1 = communicator.waitForPopupLoaded();
      simulateMessage({
        event: GeminiSdkEvent.POPUP_LOADED,
        requestId: "req1",
      });
      await popupPromise1;

      // Mark as closed
      mockPopup.closed = true;

      // Should open new popup
      const popupPromise2 = communicator.waitForPopupLoaded();
      simulateMessage({
        event: GeminiSdkEvent.POPUP_LOADED,
        requestId: "req2",
      });
      const popup2 = await popupPromise2;

      expect(popup2).toBe(mockPopup);
    });
  });

  describe("postMessage", () => {
    it("should post message to popup", async () => {
      // Open popup first
      const popupPromise = communicator.waitForPopupLoaded();
      simulateMessage({
        event: GeminiSdkEvent.POPUP_LOADED,
        requestId: "req1",
      });
      await popupPromise;

      const message: GeminiSdkMessage = {
        chainId: 1,
        data: {},
        event: GeminiSdkEvent.SDK_CONNECT_REQUEST,
        origin: window.location.origin,
        requestId: "test-request",
      };

      await communicator.postMessage(message);
      expect(mockPopup.postMessage).toHaveBeenCalledWith(message, new URL(SDK_BACKEND_URL).origin);
    });
  });

  describe("postRequestAndWaitForResponse", () => {
    it("should post request and wait for matching response", async () => {
      // Open popup first
      const popupPromise = communicator.waitForPopupLoaded();
      simulateMessage({
        event: GeminiSdkEvent.POPUP_LOADED,
        requestId: "req1",
      });
      await popupPromise;

      const request: GeminiSdkMessage = {
        chainId: 1,
        data: {},
        event: GeminiSdkEvent.SDK_CONNECT_REQUEST,
        origin: window.location.origin,
        requestId: "test-request-123",
      };

      const responsePromise = communicator.postRequestAndWaitForResponse<GeminiSdkMessage, GeminiSdkMessageResponse>(
        request,
      );

      // Simulate response
      const response: GeminiSdkMessageResponse = {
        chainId: 1,
        data: { accounts: ["0x123"] },
        event: GeminiSdkEvent.SDK_CONNECT_RESPONSE,
        origin: window.location.origin,
        requestId: "test-request-123",
      };

      simulateMessage(response);

      const result = await responsePromise;
      expect(result).toEqual(response);
    });

    it("should ignore responses with different requestId", async () => {
      // Open popup first
      const popupPromise = communicator.waitForPopupLoaded();
      simulateMessage({
        event: GeminiSdkEvent.POPUP_LOADED,
        requestId: "req1",
      });
      await popupPromise;

      const request: GeminiSdkMessage = {
        chainId: 1,
        data: {},
        event: GeminiSdkEvent.SDK_CONNECT_REQUEST,
        origin: window.location.origin,
        requestId: "correct-id",
      };

      const responsePromise = communicator.postRequestAndWaitForResponse<GeminiSdkMessage, GeminiSdkMessageResponse>(
        request,
      );

      // Send wrong response
      simulateMessage({
        data: { accounts: [] },
        event: GeminiSdkEvent.SDK_CONNECT_RESPONSE,
        requestId: "wrong-id",
      });

      // Send correct response
      simulateMessage({
        data: { accounts: ["0x456"] },
        event: GeminiSdkEvent.SDK_CONNECT_RESPONSE,
        requestId: "correct-id",
      });

      const result = await responsePromise;
      expect(result.requestId).toBe("correct-id");
    });
  });

  describe("onMessage", () => {
    it("should filter messages by predicate", async () => {
      const messagePromise = communicator.onMessage<GeminiSdkMessage, GeminiSdkMessageResponse>(
        message => message.event === GeminiSdkEvent.SDK_CONNECT_RESPONSE,
      );

      // Send non-matching message
      simulateMessage({
        event: GeminiSdkEvent.SDK_DISCONNECT,
        requestId: "req1",
      });

      // Send matching message
      simulateMessage({
        data: { success: true },
        event: GeminiSdkEvent.SDK_CONNECT_RESPONSE,
        requestId: "req2",
      });

      const result = await messagePromise;
      expect(result.event).toBe(GeminiSdkEvent.SDK_CONNECT_RESPONSE);
      expect(result.requestId).toBe("req2");
    });

    it("should ignore messages from wrong origin", async () => {
      const messagePromise = communicator.onMessage<GeminiSdkMessage, GeminiSdkMessageResponse>(
        message => message.event === GeminiSdkEvent.SDK_CONNECT_RESPONSE,
      );

      // Send from wrong origin
      simulateMessage(
        {
          event: GeminiSdkEvent.SDK_CONNECT_RESPONSE,
          requestId: "wrong-origin",
        },
        "https://evil.com",
      );

      // Send from correct origin
      simulateMessage({
        event: GeminiSdkEvent.SDK_CONNECT_RESPONSE,
        requestId: "correct-origin",
      });

      const result = await messagePromise;
      expect(result.requestId).toBe("correct-origin");
    });

    it("should remove listener after message received", async () => {
      const initialListenerCount = messageListeners.length;

      const messagePromise = communicator.onMessage<GeminiSdkMessage, GeminiSdkMessageResponse>(
        message => message.event === GeminiSdkEvent.SDK_CONNECT_RESPONSE,
      );

      // Should have added a listener
      expect(messageListeners.length).toBe(initialListenerCount + 1);

      simulateMessage({
        event: GeminiSdkEvent.SDK_CONNECT_RESPONSE,
        requestId: "test",
      });

      await messagePromise;

      // Should have removed the listener
      expect(messageListeners.length).toBe(initialListenerCount);
    });
  });

  describe("popup disconnect handling", () => {
    it("should call disconnect callback on SDK_DISCONNECT event", async () => {
      // Open popup first
      const popupPromise = communicator.waitForPopupLoaded();
      simulateMessage({
        event: GeminiSdkEvent.POPUP_LOADED,
        requestId: "req1",
      });
      await popupPromise;

      // Simulate disconnect event
      simulateMessage({
        event: GeminiSdkEvent.SDK_DISCONNECT,
        requestId: "disconnect-req",
      });

      // Wait for event processing
      await new Promise(resolve => setTimeout(resolve, 10));

      expect(onDisconnectCallback).toHaveBeenCalled();
    });

    it("should reject pending requests on POPUP_UNLOADED", async () => {
      // Open popup first
      const popupPromise = communicator.waitForPopupLoaded();
      simulateMessage({
        event: GeminiSdkEvent.POPUP_LOADED,
        requestId: "req1",
      });
      await popupPromise;

      // Start a pending request
      const pendingPromise = communicator.onMessage<GeminiSdkMessage, GeminiSdkMessageResponse>(
        message => message.event === ("WILL_NEVER_ARRIVE" as any),
      );

      // Simulate popup unloaded
      simulateMessage({
        event: GeminiSdkEvent.POPUP_UNLOADED,
        requestId: "unload-req",
      });

      try {
        await pendingPromise;
        expect(true).toBe(false); // Should not reach here
      } catch (error: any) {
        expect(error.code).toBe(providerErrors.userRejectedRequest().code);
      }
    });

    it("should clear all listeners on disconnect", async () => {
      // Open popup first
      const popupPromise = communicator.waitForPopupLoaded();
      simulateMessage({
        event: GeminiSdkEvent.POPUP_LOADED,
        requestId: "req1",
      });
      await popupPromise;

      // Add multiple listeners - create promises but don't await yet
      const promise1 = communicator.onMessage<GeminiSdkMessage, GeminiSdkMessageResponse>(
        message => message.event === ("EVENT1" as any),
      );
      const promise2 = communicator.onMessage<GeminiSdkMessage, GeminiSdkMessageResponse>(
        message => message.event === ("EVENT2" as any),
      );

      // Collect rejection errors
      const errors: any[] = [];
      promise1.catch(err => errors.push(err));
      promise2.catch(err => errors.push(err));

      const initialListenerCount = messageListeners.length;
      expect(initialListenerCount).toBeGreaterThan(0);

      // Simulate disconnect
      simulateMessage({
        event: GeminiSdkEvent.SDK_DISCONNECT,
        requestId: "disconnect",
      });

      // Wait for cleanup and error propagation
      await new Promise(resolve => setTimeout(resolve, 50));

      // Both promises should have rejected with user rejection error
      expect(errors.length).toBe(2);
      expect(errors[0].code).toBe(providerErrors.userRejectedRequest().code);
      expect(errors[1].code).toBe(providerErrors.userRejectedRequest().code);
    });
  });

  describe("error handling", () => {
    it("should handle popup unloaded event", async () => {
      // Open popup first
      const popupPromise = communicator.waitForPopupLoaded();
      simulateMessage({
        event: GeminiSdkEvent.POPUP_LOADED,
        requestId: "req1",
      });
      await popupPromise;

      // Start a request that will be rejected
      const pendingPromise = communicator.onMessage<GeminiSdkMessage, GeminiSdkMessageResponse>(
        message => message.event === ("WILL_NEVER_ARRIVE" as any),
      );

      // Force rejection by simulating unload
      simulateMessage({
        event: GeminiSdkEvent.POPUP_UNLOADED,
        requestId: "unload",
      });

      try {
        await pendingPromise;
        expect(true).toBe(false); // Should not reach here
      } catch (error: any) {
        expect(error.code).toBe(providerErrors.userRejectedRequest().code);
      }
    });
  });
});
