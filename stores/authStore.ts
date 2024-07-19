export const useAuthStore = defineStore('auth', () => {
    const config = useRuntimeConfig()
    const user = ref<{} | null>(null)
    const error = ref<string | null>(null)

    const setUser = (userData: {} | null) => {
        user.value = userData
    }

    const getUser = computed(() => user.value)

    const register = async (email: string, password: string, rememberMe: boolean = false) => {
        try {
            await $fetch('/api/auth/register', {
                method: 'POST',
                body: {email, password, rememberMe},
            })
        } catch (err: any) {
            error.value = err.data?.message || 'Registration failed'
        }
    }

    const login = async (email: string, password: string, rememberMe: boolean = false) => {
        try {
            await $fetch('/api/auth/login', {
                method: 'POST',
                body: {email, password, rememberMe},
            })
            const data: {} = await $fetch('/api/auth/auth_me', {method: 'GET'})
            setUser(data)
        } catch (err: any) {
            error.value = err.data?.message || 'Login failed'
        }
    }

    const logout = async () => {
        try {
            await $fetch('/api/auth/logout', {method: 'POST'})
            setUser(null)
        } catch (err: any) {
            error.value = err.message || 'Logout failed'
        }
    }

    const fetchUser = async () => {
        const token = useCookie(config.public.cookieName)
        if (!user.value && token.value) {
            try {
                const data: {} = await $fetch('/api/auth/auth_me', {
                    method: 'GET',
                    headers: useRequestHeaders(['cookie']) as HeadersInit
                })
                setUser(data)
            } catch (e) {
                await logout()
            }
        }
        return user.value
    }

    return {user, setUser, getUser, register, login, logout, fetchUser, error}
})
