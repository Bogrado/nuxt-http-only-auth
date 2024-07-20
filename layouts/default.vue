<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <header class="mb-4">
      <nuxt-link to="/dashboard" class="mx-2 text-blue-500 hover:underline">Dashboard</nuxt-link>
      <nuxt-link to="/register" class="mx-2 text-blue-500 hover:underline">Register</nuxt-link>
      <nuxt-link to="/login" class="mx-2 text-blue-500 hover:underline">Login</nuxt-link>
    </header>

    <main v-auto-animate>
      <slot/>
    </main>

  </div>
</template>

<style scoped>

</style>