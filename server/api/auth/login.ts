// server/api/auth/login.ts
export default defineEventHandler(async (event) => {
    const body = await readBody<{ email: string; password: string; rememberMe: boolean }>(event)
    const config = useRuntimeConfig()

    const {
        email,
        password,
        rememberMe
    } = body

    let authToken: any = null

    try {
        authToken = await $fetch(`${config.public.baseUrl}/auth`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: {
                email,
                password,
            }
        })
    } catch (e: any) {
        return createError({
            statusCode: e.statusCode,
            message: 'Wrong email or password',
            statusMessage: e.statusMessage
        })
    }

    setCookie(event, config.public.cookieName, authToken.token, {
        httpOnly: true,
        path: '/',
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
        expires: rememberMe ? new Date(Date.now() + config.public.cookieRememberMeExpires) : new Date(Date.now() + config.public.cookieExpires)
    })

    return {}
})
