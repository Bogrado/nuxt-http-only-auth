<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-4" v-if="user">
    <!-- Заголовок Dashboard -->
    <h2 class="mt-6 text-center text-3xl font-extrabold">Страница пользователя {{ user.nickName }} </h2>

    <!-- Верхний блок с изображением и информацией -->
    <div class="flex flex-col lg:flex-row w-full bg-white shadow-lg rounded-lg overflow-hidden my-8">
      <!-- Левая колонка с изображением -->
      <div class="lg:w-2/3">
        <img src="https://via.placeholder.com/800x400" alt="Placeholder Image" class="w-full h-full object-cover">
      </div>
      <!-- Правая колонка с информацией -->
      <div class="flex flex-col p-8 lg:w-1/3">
        <h2 class="text-2xl font-bold mb-4">Информация о пользователе</h2>
        <ul class="list-disc list-inside mb-4">
          <li>Email: {{ user.email }}</li>
          <li>ID пользователя: {{ user.id }}</li>
          <li>ROLE: {{ user.role }}</li>
        </ul>
        <p>
          Дополнительная информация или описание.
        </p>
      </div>
    </div>

    <!-- Нижний блок с текстом -->
    <div class="w-full bg-gray-100 p-8 rounded-lg shadow-lg">
      <h3 class="text-xl font-semibold mb-2">Нижний блок с текстом</h3>
      <p>
        Какая-то супер важная дополнительная информация или описание.
      </p>
    </div>

    <!-- Кнопка выхода -->
    <div class="w-full mt-4 flex justify-center">
      <div v-if="loading"
           class="w-full max-w-md mt-2 py-2 border border-gray-600 rounded text-gray-300 hover:bg-gray-700 transition">
        <v-preloader/>
      </div>
      <button @click="handleLogout" v-else
              class="w-full max-w-md mt-2 py-2 border border-gray-600 rounded text-gray-300 hover:bg-gray-700 transition">
        Logout
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  middleware: 'auth'
})

const {logout, user } = useAuth()
const loadingStore = useLoadingStore()
const loading = computed(() => loadingStore.loading)

const handleLogout = async () => {
  await logout()
  navigateTo('/')
}
</script>
