<script setup lang="ts">

</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <layout-t-header />

    <main v-auto-animate class="flex-1 container mx-auto p-4">
      <slot/>
    </main>

    <layout-t-footer />

  </div>
</template>

<style scoped>

</style>