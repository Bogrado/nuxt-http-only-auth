<template>
  <div class="min-h-screen flex  justify-center">
    <div class="max-w-md w-full space-y-8" v-auto-animate>
      <h2 class="mt-6 text-center text-3xl font-extrabold">Register</h2>
      <register-form :loading="loading" @handle-submit="handleRegister ( $event )"/>
    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  middleware: 'authorized'
})

const {register, error, user} = useAuth()
const loadingStore = useLoadingStore()
const loading = computed(() => loadingStore.loading)

const handleRegister = async (event: any) => {
  await register(event)
  if (!error.value) {
    navigateTo('/login')
  }

}

onMounted(() => {
  clearError()
})
</script>
