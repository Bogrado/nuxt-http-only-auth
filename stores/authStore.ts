export const useAuthStore = defineStore('auth', () => {
    const config = useRuntimeConfig()
    const user = ref<{} | null>(null)
    const error = ref<string | null>(null)
    const loading = ref<boolean>(false)

    const setUser = (userData: {} | null) => {
        user.value = userData
    }

    const getUser = computed(() => user.value)
    const clearError = () => error.value = null

    const register = async (userData: Record<string, any>) => {
        loading.value = true
        try {
            await $fetch('/api/auth/register', {
                method: 'POST',
                body: userData,
            })
            clearError()
        } catch (err: any) {
            error.value = err.data?.message || 'Registration failed'
        } finally {
            loading.value = false
        }
    }

    const login = async (credentials: { email: string; password: string; rememberMe?: boolean }) => {
        loading.value = true
        try {
            await $fetch('/api/auth/login', {
                method: 'POST',
                body: credentials,
            })
            const data: {} = await $fetch('/api/auth/auth_me', {method: 'GET'})
            setUser(data)
            clearError()
        } catch (err: any) {
            error.value = err.data?.message || 'Login failed'
        } finally {
            loading.value = false
        }
    }

    const logout = async () => {
        try {
            loading.value = true
            await $fetch('/api/auth/logout', {method: 'POST'})
            setUser(null)
            clearError()
        } catch (err: any) {
            error.value = err.message || 'Logout failed'
        } finally {
            loading.value = false
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
                clearError()
            } catch (e) {
                await logout()
            } finally {
            }
        }
    }

    const getLoading = computed(() => loading.value)

    return {user, setUser, getUser, register, login, logout, fetchUser, error, clearError, loading, getLoading}
})
