import React from "react";
export default function Turnstile({ id, className, style, sitekey, action, cData, theme, size, tabIndex, responseField, responseFieldName, autoResetOnExpire, onVerify, onLoad, onError, onExpire, onTimeout, }: TurnstileProps): JSX.Element;
interface TurnstileProps extends TurnstileCallbacks {
    sitekey: string;
    action?: string;
    cData?: string;
    theme?: "light" | "dark" | "auto";
    size?: "normal" | "invisible" | "compact";
    tabIndex?: number;
    responseField?: boolean;
    responseFieldName?: string;
    autoResetOnExpire?: boolean;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
}
interface TurnstileCallbacks {
    onVerify: (token: string) => void;
    onLoad?: (widgetId: string) => void;
    onError?: (error?: Error | any) => void;
    onExpire?: () => void;
    onTimeout?: () => void;
}
declare global {
    interface Window {
        turnstile: {
            render: (idOrContainer: string | HTMLElement, options: TurnstileOptions) => string;
            reset: (widgetIdOrContainer: string | HTMLElement) => void;
            getResponse: (widgetIdOrContainer: string | HTMLElement) => string | undefined;
            remove: (widgetIdOrContainer: string | HTMLElement) => void;
        };
    }
}
interface TurnstileOptions {
    sitekey: string;
    action?: string;
    cData?: string;
    callback?: (token: string) => void;
    "error-callback"?: () => void;
    "expired-callback"?: () => void;
    "timeout-callback"?: () => void;
    theme?: "light" | "dark" | "auto";
    tabindex?: number;
    "response-field"?: boolean;
    "response-field-name"?: string;
    size?: "normal" | "invisible" | "compact";
}
export {};
