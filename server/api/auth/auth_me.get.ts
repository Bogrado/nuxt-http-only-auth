// // server/api/auth/auth_me.get.ts
// export default defineEventHandler(async (event) => {
//     const config = useRuntimeConfig()
//     const token = getCookie(event, config.public.cookieName)
//
//     let userData: any = null
//
//     if (!token) {
//         return userData
//     }
//
//     try {
//         userData = await $fetch(`${config.public.baseUrl}/auth_me`, {
//             method: 'GET',
//             headers: {Authorization: `Bearer ${token}`}
//         })
//         console.log('User data:', userData)
//     } catch (e: any) {
//         console.log(e)
//     }
//
//     return userData // возвращает объект пользователя
// })


export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const token = getCookie(event, config.public.cookieName)

    if (!token) {
        throw createError({
            statusCode: 401,
            statusMessage: 'No token provided'
        })
    }

    try {
        return await $fetch(`${config.public.baseUrl}/auth_me`, {
            method: 'GET',
            headers: {Authorization: `Bearer ${token}`}
        })

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
