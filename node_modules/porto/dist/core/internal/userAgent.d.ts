declare global {
    interface Navigator {
        userAgentData?: {
            mobile?: boolean;
        };
    }
}
export declare function isSafari(): boolean;
export declare function isFirefox(): boolean;
export declare function isMobile(): boolean;
//# sourceMappingURL=userAgent.d.ts.map