<template>
  <div class="min-h-screen flex  justify-center">
    <div class="max-w-md w-full space-y-8" v-auto-animate>
      <h2 class="mt-6 text-center text-3xl font-extrabold">Login</h2>
      <login-form @handle-submit="handleLogin( $event )" :loading="loading"/>
    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  middleware: 'authorized'
})

const {login, error, user} = useAuth()
const loadingStore = useLoadingStore()
const loading = computed(() => loadingStore.loading)
const handleLogin = async (event: any) => {
  await login(event)
  if (!error.value && user.value) {
    navigateTo('/dashboard')
  }

}

onMounted(() => {
  clearError()
})
</script>
