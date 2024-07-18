export const useAuthStore = defineStore('auth', () => {
    const user = ref<{ id: number; email: string; role: string } | null>(null)

    const setUser = (userData: { id: number; email: string; role: string } | null) => {
        user.value = userData
    }

    const getUser = computed(() => user.value)

    return {user, setUser, getUser}
})
