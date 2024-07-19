// server/api/auth/register.post.ts
export default defineEventHandler(async (event) => {
    const body = await readBody<{ email: string; password: string; rememberMe: boolean; }>(event)
    const config = useRuntimeConfig()

    const {email, password} = body

    try {
        const response = await $fetch(`${config.public.baseUrl}/register`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: {email, password}
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
