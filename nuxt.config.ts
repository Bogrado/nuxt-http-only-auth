// https://nuxt.com/docs/api/configuration/nuxt-config
const ONE_DAY = 60 * 60 * 24 * 1000
const ONE_WEEK = ONE_DAY * 7

export default defineNuxtConfig({
    plugins: ['~/plugins/auth-check.ts'],
    compatibilityDate: '2024-04-03',
    devtools: {
      enabled: true,

      timeline: {
        enabled: true
      }
    },
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
    router: {
        middleware: 'auth'
    },
    runtimeConfig: {
        public: {
            cookieName: process.env.COOKIE_NAME || 'auth_token',
            baseUrl: process.env.BASE_URL || 'https://7af91f1883946b22.mokky.dev',
            cookieExpires: parseInt(process.env.COOKIE_EXPIRES || ONE_DAY.toString(), 10), // 1 day
            cookieRememberMeExpires: parseInt(process.env.COOKIE_REMEMBER_ME_EXPIRES || ONE_WEEK.toString(), 10), // 7 days
        }
    }
})