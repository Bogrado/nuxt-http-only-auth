export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore()
    const user = computed(() => authStore.getUser)

    if (!user.value) {
        console.log(user.value)
        return navigateTo('/login')
    }
})