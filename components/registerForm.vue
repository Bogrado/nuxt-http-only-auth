<script setup lang="ts">
import {useRegisterForm} from '@/composables/forms/useRegisterForm'

defineProps({
  loading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['handleSubmit'])

const {state, error, v$, validateForm} = useRegisterForm()

const handleSubmit = async () => {
  if (await validateForm()) {
    emit('handleSubmit', {nickName: state.nickName, email: state.email, password: state.password})
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="space-y-4 bg-gray-800 p-6 rounded shadow-lg">
    <h2 class="text-white text-lg font-bold mb-4">Создать учетную запись</h2>
    <div class="min-h-[6rem]">
      <label for="register-nickName" class="block text-sm font-medium text-gray-300">Никнейм</label>
      <input
          id="register-nickName"
          type="text"
          v-model="state.nickName"
          @blur="v$.nickName.$touch"
          :class="{ 'border-red-500': v$.nickName.$error }"
          class="mt-1 block w-full p-2 border rounded bg-gray-700 text-white border-gray-600"
          required
      />
      <span v-if="v$.nickName.$error" class="text-red-500 text-sm">Некорректное имя</span>
    </div>
    <div class="min-h-[6rem]">
      <label for="register-email" class="block text-sm font-medium text-gray-300">Электронная почта</label>
      <input
          id="register-email"
          type="email"
          v-model="state.email"
          @blur="v$.email.$touch"
          :class="{ 'border-red-500': v$.email.$error }"
          class="mt-1 block w-full p-2 border rounded bg-gray-700 text-white border-gray-600"
          required
      />
      <span v-if="v$.email.$error" class="text-red-500 text-sm">Некорректный email</span>
    </div>
    <div class="min-h-[6rem]">
      <label for="register-password" class="block text-sm font-medium text-gray-300">Пароль</label>
      <input
          id="register-password"
          type="password"
          v-model="state.password"
          @blur="v$.password.$touch"
          :class="{ 'border-red-500': v$.password.$error }"
          class="mt-1 block w-full p-2 border rounded bg-gray-700 text-white border-gray-600"
          required
      />
      <span v-if="v$.password.$error" class="text-red-500 text-sm">Некорректный пароль</span>
    </div>
    <div class="min-h-[6rem]">
      <label for="register-confirm-password" class="block text-sm font-medium text-gray-300">Подтвердите пароль</label>
      <input
          id="register-confirm-password"
          type="password"
          v-model="state.confirmPassword"
          @blur="v$.confirmPassword.$touch"
          :class="{ 'border-red-500': v$.confirmPassword.$error }"
          class="mt-1 block w-full p-2 border rounded bg-gray-700 text-white border-gray-600"
          required
      />
      <span v-if="v$.confirmPassword.$error" class="text-red-500 text-sm">Пароли не совпадают или поле пустое</span>
    </div>
    <button
        type="submit"
        class="w-full bg-yellow-500 text-black py-2 rounded hover:bg-yellow-600 transition"
    >
      Зарегистрироваться
    </button>
    <div class="text-center text-gray-400 mt-4">
      <span>Уже есть учетная запись?</span>
      <button
          type="button"
          class="w-full mt-2 py-2 border border-gray-600 rounded text-gray-300 hover:bg-gray-700 transition"
          @click="navigateTo('/login')"
      >
        Войти
      </button>
    </div>
    <div class="min-h-[1rem]">
      <p v-if="error" class="text-red-500 mt-4 text-sm">{{ error }}</p>
    </div>
  </form>
</template>