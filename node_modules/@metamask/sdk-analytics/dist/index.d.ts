interface components {
    schemas: {
        /** @description A union of all possible event types, differentiated by the 'name' property. */
        Event: components["schemas"]["SdkInitializedEvent"] | components["schemas"]["SdkUsedChainEvent"] | components["schemas"]["SdkConnectionInitiatedEvent"] | components["schemas"]["SdkConnectionEstablishedEvent"] | components["schemas"]["SdkConnectionRejectedEvent"] | components["schemas"]["SdkConnectionFailedEvent"] | components["schemas"]["WalletConnectionRequestReceivedEvent"] | components["schemas"]["WalletConnectionUserApprovedEvent"] | components["schemas"]["WalletConnectionUserRejectedEvent"] | components["schemas"]["SdkActionRequestedEvent"] | components["schemas"]["SdkActionSucceededEvent"] | components["schemas"]["SdkActionFailedEvent"] | components["schemas"]["SdkActionRejectedEvent"] | components["schemas"]["WalletActionReceivedEvent"] | components["schemas"]["WalletActionUserApprovedEvent"] | components["schemas"]["WalletActionUserRejectedEvent"];
        SdkInitializedEvent: {
            /**
             * @description Identifies the event as SDK initialization. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            name: "sdk_initialized";
            /** @description Version of the SDK. */
            sdk_version: string;
            /** @description Unique identifier for the dApp. */
            dapp_id: string;
            /**
             * Format: uuid
             * @description Anonymous identifier for the user or session.
             */
            anon_id: string;
            /**
             * @description Platform on which the SDK is running.
             * @enum {string}
             */
            platform: "web-desktop" | "web-mobile" | "nodejs" | "in-app-browser" | "react-native";
            /** @description Type of integration used by the SDK. */
            integration_type: string;
        };
        SdkUsedChainEvent: {
            /**
             * @description Identifies the event as SDK chain usage. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            name: "sdk_used_chain";
            /** @description Version of the SDK. */
            sdk_version: string;
            /** @description Unique identifier for the dApp. */
            dapp_id: string;
            /**
             * Format: uuid
             * @description Anonymous identifier for the user or session.
             */
            anon_id: string;
            /** @description CAIP-2 chain ID used by the SDK. */
            caip_chain_id: string;
            /**
             * @description Platform on which the SDK is running.
             * @enum {string}
             */
            platform: "web-desktop" | "web-mobile" | "nodejs" | "in-app-browser" | "react-native";
            /** @description Type of integration used by the SDK. */
            integration_type: string;
        };
        SdkConnectionInitiatedEvent: {
            /**
             * @description Identifies the event as connection initiation. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            name: "sdk_connection_initiated";
            /** @description Version of the SDK. */
            sdk_version: string;
            /** @description Unique identifier for the dApp. */
            dapp_id: string;
            /**
             * Format: uuid
             * @description Anonymous identifier for the user or session.
             */
            anon_id: string;
            /**
             * @description Type of transport used for the connection.
             * @enum {string}
             */
            transport_type: "direct" | "websocket" | "deeplink";
            /**
             * @description Platform on which the SDK is running.
             * @enum {string}
             */
            platform: "web-desktop" | "web-mobile" | "nodejs" | "in-app-browser" | "react-native";
            /** @description Type of integration used by the SDK. */
            integration_type: string;
        };
        SdkConnectionEstablishedEvent: {
            /**
             * @description Identifies the event as connection established. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            name: "sdk_connection_established";
            /** @description Version of the SDK. */
            sdk_version: string;
            /** @description Unique identifier for the dApp. */
            dapp_id: string;
            /**
             * Format: uuid
             * @description Anonymous identifier for the user or session.
             */
            anon_id: string;
            /**
             * @description Type of transport used for the connection.
             * @enum {string}
             */
            transport_type: "direct" | "websocket" | "deeplink";
            /**
             * @description Platform on which the SDK is running.
             * @enum {string}
             */
            platform: "web-desktop" | "web-mobile" | "nodejs" | "in-app-browser" | "react-native";
            /** @description Type of integration used by the SDK. */
            integration_type: string;
        };
        SdkConnectionRejectedEvent: {
            /**
             * @description Identifies the event as connection rejected. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            name: "sdk_connection_rejected";
            /** @description Version of the SDK. */
            sdk_version: string;
            /** @description Unique identifier for the dApp. */
            dapp_id: string;
            /**
             * Format: uuid
             * @description Anonymous identifier for the user or session.
             */
            anon_id: string;
            /**
             * @description Type of transport used for the connection.
             * @enum {string}
             */
            transport_type: "direct" | "websocket" | "deeplink";
            /**
             * @description Platform on which the SDK is running.
             * @enum {string}
             */
            platform: "web-desktop" | "web-mobile" | "nodejs" | "in-app-browser" | "react-native";
            /** @description Type of integration used by the SDK. */
            integration_type: string;
        };
        SdkConnectionFailedEvent: {
            /**
             * @description Identifies the event as connection failed. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            name: "sdk_connection_failed";
            /** @description Version of the SDK. */
            sdk_version: string;
            /** @description Unique identifier for the dApp. */
            dapp_id: string;
            /**
             * Format: uuid
             * @description Anonymous identifier for the user or session.
             */
            anon_id: string;
            /**
             * @description Type of transport used for the connection.
             * @enum {string}
             */
            transport_type: "direct" | "websocket" | "deeplink";
            /**
             * @description Platform on which the SDK is running.
             * @enum {string}
             */
            platform: "web-desktop" | "web-mobile" | "nodejs" | "in-app-browser" | "react-native";
            /** @description Type of integration used by the SDK. */
            integration_type: string;
        };
        WalletConnectionRequestReceivedEvent: {
            /**
             * @description Identifies the event as connection request received. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            name: "wallet_connection_request_received";
            /**
             * Format: uuid
             * @description Anonymous identifier for the user or session.
             */
            anon_id: string;
            /**
             * @description Platform receiving the connection request.
             * @enum {string}
             */
            platform: "extension" | "mobile";
        };
        WalletConnectionUserApprovedEvent: {
            /**
             * @description Identifies the event as user-approved connection. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            name: "wallet_connection_user_approved";
            /**
             * Format: uuid
             * @description Anonymous identifier for the user or session.
             */
            anon_id: string;
            /**
             * @description Platform where the approval occurred.
             * @enum {string}
             */
            platform: "extension" | "mobile";
        };
        WalletConnectionUserRejectedEvent: {
            /**
             * @description Identifies the event as user-rejected connection. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            name: "wallet_connection_user_rejected";
            /**
             * Format: uuid
             * @description Anonymous identifier for the user or session.
             */
            anon_id: string;
            /**
             * @description Platform where the rejection occurred.
             * @enum {string}
             */
            platform: "extension" | "mobile";
        };
        SdkActionRequestedEvent: {
            /**
             * @description Identifies the event as a wallet action request. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            name: "sdk_action_requested";
            /** @description Version of the SDK. */
            sdk_version: string;
            /** @description Unique identifier for the dApp. */
            dapp_id: string;
            /**
             * Format: uuid
             * @description Anonymous identifier for the user or session.
             */
            anon_id: string;
            /** @description The specific wallet action requested. */
            action: string;
            /**
             * @description Platform on which the SDK is running.
             * @enum {string}
             */
            platform: "web-desktop" | "web-mobile" | "nodejs" | "in-app-browser" | "react-native";
            /** @description Type of integration used by the SDK. */
            integration_type: string;
        };
        SdkActionSucceededEvent: {
            /**
             * @description Identifies the event as a successful wallet action. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            name: "sdk_action_succeeded";
            /** @description Version of the SDK. */
            sdk_version: string;
            /** @description Unique identifier for the dApp. */
            dapp_id: string;
            /**
             * Format: uuid
             * @description Anonymous identifier for the user or session.
             */
            anon_id: string;
            /** @description The specific wallet action that succeeded. */
            action: string;
            /**
             * @description Platform on which the SDK is running.
             * @enum {string}
             */
            platform: "web-desktop" | "web-mobile" | "nodejs" | "in-app-browser" | "react-native";
            /** @description Type of integration used by the SDK. */
            integration_type: string;
        };
        SdkActionFailedEvent: {
            /**
             * @description Identifies the event as a failed wallet action. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            name: "sdk_action_failed";
            /** @description Version of the SDK. */
            sdk_version: string;
            /** @description Unique identifier for the dApp. */
            dapp_id: string;
            /**
             * Format: uuid
             * @description Anonymous identifier for the user or session.
             */
            anon_id: string;
            /** @description The specific wallet action that failed. */
            action: string;
            /**
             * @description Platform on which the SDK is running.
             * @enum {string}
             */
            platform: "web-desktop" | "web-mobile" | "nodejs" | "in-app-browser" | "react-native";
            /** @description Type of integration used by the SDK. */
            integration_type: string;
        };
        SdkActionRejectedEvent: {
            /**
             * @description Identifies the event as a rejected wallet action. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            name: "sdk_action_rejected";
            /** @description Version of the SDK. */
            sdk_version: string;
            /** @description Unique identifier for the dApp. */
            dapp_id: string;
            /**
             * Format: uuid
             * @description Anonymous identifier for the user or session.
             */
            anon_id: string;
            /** @description The specific wallet action that was rejected. */
            action: string;
            /**
             * @description Platform on which the SDK is running.
             * @enum {string}
             */
            platform: "web-desktop" | "web-mobile" | "nodejs" | "in-app-browser" | "react-native";
            /** @description Type of integration used by the SDK. */
            integration_type: string;
        };
        WalletActionReceivedEvent: {
            /**
             * @description Identifies the event as a received wallet action. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            name: "wallet_action_received";
            /**
             * Format: uuid
             * @description Anonymous identifier for the user or session.
             */
            anon_id: string;
            /**
             * @description Platform receiving the wallet action.
             * @enum {string}
             */
            platform: "extension" | "mobile";
        };
        WalletActionUserApprovedEvent: {
            /**
             * @description Identifies the event as an approved wallet action. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            name: "wallet_action_user_approved";
            /**
             * Format: uuid
             * @description Anonymous identifier for the user or session.
             */
            anon_id: string;
            /**
             * @description Platform where the approval occurred.
             * @enum {string}
             */
            platform: "extension" | "mobile";
        };
        WalletActionUserRejectedEvent: {
            /**
             * @description Identifies the event as a rejected wallet action. (enum property replaced by openapi-typescript)
             * @enum {string}
             */
            name: "wallet_action_user_rejected";
            /**
             * Format: uuid
             * @description Anonymous identifier for the user or session.
             */
            anon_id: string;
            /**
             * @description Platform where the rejection occurred.
             * @enum {string}
             */
            platform: "extension" | "mobile";
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}

type Event = components['schemas']['Event'];
declare class Analytics {
    private enabled;
    private readonly sender;
    private properties;
    constructor(baseUrl: string);
    enable(): void;
    setGlobalProperty(key: string, value: string): void;
    track<T extends Event>(name: T['name'], properties: Partial<T>): void;
}

declare const analytics: Analytics;

export { analytics };
