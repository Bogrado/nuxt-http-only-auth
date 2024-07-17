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
    })

    // Set HttpOnly cookie
    setCookie(event, config.public.cookieName, response.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        expires: new Date(Date.now() + config.public.cookieExpires)
    })

    console.log('Cookie set:', parseCookies(event))

    return response
})
