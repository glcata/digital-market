declare global {
    interface ImportMeta {
        readonly env: {
            VITE_APP_EXAMPLE: string
        }
    }
    interface Window {
        __VERCEL_INSIGHTS__?: {
            routeChange: (path: string) => void;
        };
    }
}

export {};