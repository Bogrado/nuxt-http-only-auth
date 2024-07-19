// server/api/auth/register.post.ts
export default defineEventHandler(async (event) => {
    const body = await readBody<{ email: string; password: string; rememberMe: boolean; }>(event)
    const config = useRuntimeConfig()

    const {email, password} = body

    const response = await $fetch(`${config.public.baseUrl}/register`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: {email, password}
    })

    return {} // возвращает ничего
})
