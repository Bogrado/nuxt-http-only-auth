// server/api/auth/logout.post.ts
export default defineEventHandler((event) => {
    const config = useRuntimeConfig()

    deleteCookie(event, config.public.cookieName, { // очищает куки
        httpOnly: true,
        path: '/',
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production'
    })

    return null
})
