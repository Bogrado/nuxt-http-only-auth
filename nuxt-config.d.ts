declare module '@nuxt/schema' {
    interface NuxtConfig {
        router?: {
            middleware?: string | string[];
        };
    }
}