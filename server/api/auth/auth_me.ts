export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const token = getCookie(event, config.public.cookieName)

    let userData: any = null

    if (!token) {
        console.log('No token found', token)
        return userData
    }

    try {
        userData = await $fetch(`${config.public.baseURL}/auth_me`, {
            method: 'GET',
            headers: {Authorization: `Bearer ${token}`}
        })
        console.log('User data:', userData)
    } catch (e: any) {
        console.log(e)
    }

    return userData
})
