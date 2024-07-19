// server/api/auth/login.post.ts
export default defineEventHandler(async (event) => {
    const body = await readBody<{ email: string; password: string; rememberMe: boolean; }>(event)
    const config = useRuntimeConfig()

    const {
        email,
        password,
        rememberMe
    } = body

    try {
        const response: { data: object, token: string } = await $fetch(`${config.public.baseUrl}/auth`, {
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

        setCookie(event, config.public.cookieName, response.token, { // устанавливает куки
            httpOnly: true,
            path: '/',
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
            expires: rememberMe ? new Date(Date.now() + config.public.cookieRememberMeExpires) : new Date(Date.now() + config.public.cookieExpires)
        })
        return response

    } catch (e: any) {
        if (e.data && e.data.statusCode) {
            throw createError({
                statusCode: e.data.statusCode,
                statusMessage: e.data.message || 'Error from external API',
                data: {error: e.data.error}
            })
        }
        throw createError({
            statusCode: e.statusCode || 500,
            statusMessage: e.message || 'Internal Server Error'
        })
    }
})
