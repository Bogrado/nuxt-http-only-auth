<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-4">
    <h2 class="mt-6 text-center text-3xl font-extrabold">Проект с авторизацией на Nuxt 3</h2>

    <div class="w-full max-w-3xl mt-8 text-left">
      <h3 class="text-2xl font-bold mb-4">Документация по авторизации</h3>
      <p class="mb-4">
        Мини проект реализует авторизацию с использованием Nuxt 3 и Pinia для управления состоянием. Включает
        регистрацию, вход, выход и проверку аутентификации пользователя. Токен доступа хранится в куки для обеспечения
        безопасности и удобства пользовательского взаимодействия.
      </p>
      <h4 class="text-xl font-semibold mb-2">1. Компоненты и страницы</h4>
      <p class="mb-4">
        Созданы следующие страницы и компоненты для реализации функционала авторизации:
      </p>
      <ul class="list-disc list-inside mb-4">
        <li>Форма регистрации</li>
        <li>Форма входа</li>
        <li>Страница авторизации</li>
        <li>Страница регистрацииserver</li>
        <li>Защищенная страница dashboard с информацией о пользователе</li>
      </ul>

      <h4 class="text-xl font-semibold mb-2">2. API routes</h4>
      <p class="mb-4">
        Реализованы следующие API роуты для управления пользователями:
      </p>
      <ul class="list-disc list-inside mb-4">
        <li><code>server/api/auth/register</code> - для регистрации пользователя</li>
        <li><code>server/api/auth/login</code> - для входа пользователя</li>
        <li><code>server/api/auth/auth_me</code> - для проверки токена пользователя</li>
        <li><code>server/api/auth/logout</code> - для выхода пользователя</li>
      </ul>

      <h4 class="text-xl font-semibold mb-2">3. Pinia Store: auth</h4>
      <p class="mb-4">
        Pinia store для управления состоянием пользователя и взаимодействия с API роутами.
      </p>
      <v-code :code="authStore"/>

      <h4 class="text-xl font-semibold mb-2">4. Composable: useAuth</h4>
      <p class="mb-4">
        Composable для управления авторизацией и взаимодействия с Pinia store.
      </p>
      <v-code :code="useAuth"/>

      <h4 class="text-xl font-semibold mb-2">5. Composable: useLoginForm</h4>
      <p class="mb-4">
        Composable useLoginForm используется для управления состоянием и валидацией формы входа. Он включает в себя
        правила валидации, использует @vuelidate/core и предоставляет доступ к состоянию формы, ошибкам и объекту
        валидации.
      </p>
      <v-code :code="useLoginForm"/>

      <h4 class="text-xl font-semibold mb-2">6. Composable: UseRegisterForm</h4>
      <p class="mb-4">
        Composable useRegisterForm используется для управления состоянием и валидацией формы регистрации. Он включает в
        себя правила валидации, использует @vuelidate/core и предоставляет доступ к состоянию формы, ошибкам и объекту
        валидации.
      </p>
      <v-code :code="useRegisterForm"/>

      <h4 class="text-xl font-semibold mb-2">7. Middleware</h4>
      <p class="mb-4">
        Middleware для защиты маршрутов, требующих аутентификации.
      </p>
      <v-code :code="auth"/>

      <h4 class="text-xl font-semibold mb-2">8. Плагин auth-check</h4>
      <p class="mb-4">
        Плагин auth-check используется для автоматической проверки состояния аутентификации пользователя при запуске
        приложения. Он вызывает функцию fetchUser из useAuth для получения данных пользователя и обновления состояния.
      </p>
      <v-code :code="authCheck"/>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import useAuth from '~/composables/useAuth.ts?raw';
import authStore from '~/stores/authStore.ts?raw';
import auth from "~/middleware/auth.ts?raw";
import authCheck from "~/plugins/auth-check.ts?raw";
import useLoginForm from "~/composables/forms/useLoginForm.ts?raw";
import useRegisterForm from "~/composables/forms/useRegisterForm.ts?raw";

const isVisible = ref({
  authComposable: false,
  authStore: false,
  middleware: false,
});

const toggleVisibility = (section) => {
  isVisible.value[section] = !isVisible.value[section];
};

</script>

<style scoped>
/* Дополнительные стили */
</style>
