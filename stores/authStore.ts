export const useAuthStore = defineStore('auth', () => {
    const user = ref<{ id: number; email: string; role: string } | null>(null)
    const token = ref<string | null | undefined>('')

    const setUser = (userData: { id: number; email: string; role: string }, userToken: string | null | undefined) => {
        user.value = userData
        token.value = userToken
    }

    const getUser = computed(() => user.value)

    return {user, token, setUser, getUser}
})
