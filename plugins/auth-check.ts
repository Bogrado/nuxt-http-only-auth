// plugins/auth-check.ts
import {defineNuxtPlugin, useRequestHeaders} from '#app'
import {useAuth} from '@/composables/useAuth'

export default defineNuxtPlugin(async (nuxtApp) => {
    const {fetchUser} = useAuth()
    await fetchUser()
})
