export default defineNuxtRouteMiddleware(async (to, from) => {
    try {
        const response = await $fetch('/api/auth_me')
        console.log('Authenticated:', response)
    } catch (error) {
        console.error('Authentication failed:', error)
        return navigateTo('/login')
    }
})
