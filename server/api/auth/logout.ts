// server/api/auth/logout.ts
export default defineEventHandler((event) => {
    const config = useRuntimeConfig()

    deleteCookie(event, config.public.cookieName, {
        httpOnly: true,
        path: '/',
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production'
    })

    return {
        user: null
    }
})
