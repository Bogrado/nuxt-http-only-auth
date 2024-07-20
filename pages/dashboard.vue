<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="max-w-md w-full space-y-8" v-auto-animate>
      <h2 class="mt-6 text-center text-3xl font-extrabold">Dashboard</h2>
      <v-preloader v-if="loading"/>
      <button @click="handleLogout" v-else
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
        Logout
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  middleware: 'auth'
})

const {logout} = useAuth()
const auth = useAuthStore()
const loading = computed(() => auth.getLoading)

const handleLogout = async () => {
  await logout()
  navigateTo('/')
}
</script>
