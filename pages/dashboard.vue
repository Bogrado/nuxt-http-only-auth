<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="max-w-md w-full space-y-8" v-auto-animate>
      <h2 class="mt-6 text-center text-3xl font-extrabold">Dashboard</h2>
      <div v-if="loading"
           class="w-full mt-2 py-2 border border-gray-600 rounded text-gray-300 hover:bg-gray-700 transition">
        <v-preloader/>
      </div>
      <button @click="handleLogout" v-else
              class="w-full mt-2 py-2 border border-gray-600 rounded text-gray-300 hover:bg-gray-700 transition">
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
const loadingStore = useLoadingStore()
const loading = computed(() => loadingStore.loading)

const handleLogout = async () => {
  await logout()
  navigateTo('/')
}
</script>
