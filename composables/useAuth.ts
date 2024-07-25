export const useAuth = () => {
    const authStore = useAuthStore()

    interface User {
        [key: string]: any
    }


    const register = async (userData: Record<string, any>) => await authStore.register(userData)

    const login = async (credentials: {
        email: string;
        password: string;
        rememberMe?: boolean
    }) => await authStore.login(credentials)

    const logout = async () => await authStore.logout()

    const fetchUser = async () => await authStore.fetchUser()

    const clearError = () => authStore.clearError()

    const user = computed<User | null>(() => authStore.getUser)
    const error = computed(() => authStore.error)

    return {user, register, login, logout, fetchUser, error, clearError}
}
