// composables/useAuth.ts
export const useAuth = () => {
    const config = useRuntimeConfig()
    const authStore = useAuthStore()
    const user = computed(() => authStore.getUser)

    const register = async (email: string, password: string, rememberMe: boolean = false) => {
        const response: any = await $fetch('/api/auth/register', {
            method: 'POST',
            body: {email, password, rememberMe},
        })


        const data: any = await $fetch('/api/auth/auth_me', {
            method: 'GET'
        })
        authStore.setUser(data)

        return user.value
    }

    const login = async (email: string, password: string, rememberMe: boolean = false) => {
        const response: any = await $fetch('/api/auth/login', {
            method: 'POST',
            body: {email, password, rememberMe},
        })

        console.log("login done", response.token)


        const data: any = await $fetch('/api/auth/auth_me', {
            method: 'GET'
        })
        authStore.setUser(data)
        return user.value
    }

    const logout = async () => {
        const {user}: any = await $fetch('/api/auth/logout', {
            method: 'POST'
        })

        authStore.setUser(user)
    }

    const fetchUser = async () => {
        const token: any = useCookie(config.public.cookieName)
        const tokenValue = token.value
        if (!user.value && tokenValue) {
            try {
                const data: any = await $fetch('/api/auth/auth_me', {
                    method: 'GET',
                    headers: useRequestHeaders(['cookie']) as HeadersInit
                })
                authStore.setUser(data)
            } catch (e) {
                await logout()
            }
        }

        return user.value
    }

    return {user, register, login, logout, fetchUser}


}
