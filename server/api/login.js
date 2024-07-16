export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const config = useRuntimeConfig()

    const response = await $fetch(`${config.public.apiBase}/auth`, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body,
        credentials: 'include',
    })

    // Set HttpOnly cookie
    setCookie(event, 'auth_token', response.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        maxAge: config.public.cookieExpires,
    })

    return response
})
