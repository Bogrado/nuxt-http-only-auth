<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="max-w-md w-full space-y-8">
      <h2 class="mt-6 text-center text-3xl font-extrabold">Dashboard</h2>
      <button @click="logout"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
        Logout
      </button>
    </div>
  </div>
</template>

<script setup>
// Использование middleware на уровне компонента, без этого не работает
definePageMeta({
  middleware: 'auth'
})

const router = useRouter()

const logout = async () => {
  try {
    await $fetch('/api/logout', {
      method: 'POST'
    })
    await router.push('/login')
  } catch (error) {
    console.error(error)
  }
}
</script>
