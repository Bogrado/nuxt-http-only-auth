<script setup lang="ts">
defineProps({
  code: {
    type: [String, Object],
    default: ''
  }
})
const isVisible = ref(false);
const toggleVisibility = () => isVisible.value = !isVisible.value;
</script>

<template>
  <div class="mb-4" v-auto-animate>
    <button @click="toggleVisibility"
            class="hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-t-lg w-full"
            :class="isVisible ? 'bg-blue-950' : 'bg-cyan-950 rounded-lg'">

      {{ isVisible ? 'Скрыть' : 'Показать' }} код
    </button>
    <pre v-if="isVisible" class="bg-gray-900 p-4 rounded-b-lg overflow-auto">
      <code class="bg-gray-900 text-white p-2 block whitespace-pre overflow-x-scroll">{{ code }}</code>
    </pre>
  </div>
</template>
