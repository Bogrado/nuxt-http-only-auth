export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const cookies = parseCookies(event)
    const token = cookies[config.public.cookieName]

    console.log('Token read from cookie:', token)
    if (!token) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Unauthorized',
        })
    }

    try {
        const response = await $fetch(`${config.public.apiBase}/auth_me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return response
    } catch (e) {
        console.log(e)
    }
})
