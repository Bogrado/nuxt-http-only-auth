<script setup lang="ts">

</script>

<template>
  <div v-auto-animate class="min-h-screen flex flex-col bg-gray-100">
    <header
        class="px-4 py-4 sm:px-10 sm:py-8 top-0 z-20 flex items-center justify-between p-3 border-b bg-gray-800 border-gray-200">
      <nuxt-link to="/" class="mx-2 text-blue-500 hover:underline">Home</nuxt-link>
      <nuxt-link to="/dashboard" class="mx-2 text-blue-500 hover:underline">Dashboard</nuxt-link>
      <nuxt-link to="/register" class="mx-2 text-blue-500 hover:underline">Register</nuxt-link>
      <nuxt-link to="/login" class="mx-2 text-blue-500 hover:underline">Login</nuxt-link>
    </header>

    <main v-auto-animate class="flex-1 container mx-auto p-4">
      <slot/>
    </main>

    <footer class="bg-gray-800 text-white p-4">
      <div class="container mx-auto text-center">
        © 2024 MyCompany. All rights reserved.
      </div>
    </footer>

  </div>
</template>

<style scoped>

</style>