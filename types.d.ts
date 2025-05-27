declare global {
    interface ImportMeta {
        readonly env: {
            VITE_APP_VERSION: string
        }
    }
    interface Window {
        __VERCEL_INSIGHTS__?: {
            routeChange: (path: string) => void;
        };
    }
}

export {};