// https://nuxt.com/docs/api/configuration/nuxt-config
const ONE_DAY = 60 * 60 * 24 * 1000
const ONE_WEEK = ONE_DAY * 7
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ['@nuxtjs/tailwindcss'],
    router: {
        middleware: 'auth'
    },
    runtimeConfig: {
        public: {
            apiBase: 'https://7af91f1883946b22.mokky.dev',
            cookieExpires: parseInt(process.env.COOKIE_REMEMBER_ME_EXPIRES || ONE_DAY.toString(), 10), // 1 day
            cookieRememberMeExpires: parseInt(process.env.COOKIE_REMEMBER_ME_EXPIRES || ONE_WEEK.toString(), 10), // 7 days
        }
    }
})