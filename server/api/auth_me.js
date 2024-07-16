// server/api/auth_me.js

export default defineEventHandler(async (event) => {
    const token = getCookie(event, 'auth_token')
    const config = useRuntimeConfig()

    if (!token) {
        console.log(false)
        throw createError({
            statusCode: 401,
            statusMessage: 'Unauthorized',
        })
    }
    console.log(true)
    const response = await $fetch(`${config.public.apiBase}/auth_me`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    return response
})
