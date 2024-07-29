declare module '@nuxt/schema' {
    interface NuxtConfig {
        router?: {
            middleware?: string | string[];
        };
        plugins?: string[];
        compatibilityDate?: string;
        runtimeConfig?: {
            public?: {
                baseUrl?: string;
                cookieName?: string;
                cookieExpires?: number;
                cookieRememberMeExpires?: number;
            }
        }
    }
}