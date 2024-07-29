<template>
  <header
      v-auto-animate
      class="sticky top-0 px-4 py-4 sm:px-10 sm:py-8 z-20 flex items-center justify-between p-3 border-b bg-gray-800 border-gray-200"
  >
    <nuxt-link to="/" class="flex items-center gap-2 sm:gap-4 text-white">
      <!--      <img src="/assets/static/logo.png" alt="Logo" class="w-8 sm:w-10" />-->
      <div>
        <h2 class="text-lg sm:text-xl font-bold uppercase">Логотип</h2>
        <p class="text-slate-400 text-xs sm:text-base">Название</p>
      </div>
    </nuxt-link>
    <ul class="hidden md:flex items-center gap-4 sm:gap-10">
      <li
          class="relative flex flex-col items-center text-slate-500 cursor-pointer hover:text-white"
      >
        <nuxt-link
            to="/"
            class="flex flex-col items-center"
            active-class="text-white"
        >
          <icons-v-catalog class="w-8 h-8 fill-current"/>
          <span class="text-sm">Главная</span>
        </nuxt-link>
      </li>
      <li
          v-if="user"
          class="relative flex flex-col items-center text-slate-500 cursor-pointer hover:text-white"
      >
        <nuxt-link
            to="/dashboard"
            class="flex flex-col items-center"
            active-class="text-white"
        >
          <icons-v-account class="w-8 h-8 fill-current"/>
          <span class="text-sm">{{ user.nickName }}</span>
        </nuxt-link>
      </li>
      <li
          v-else
          class="relative flex flex-col items-center text-slate-500 cursor-pointer hover:text-white"
      >
        <nuxt-link
            to="/login"
            class="flex flex-col items-center"
            active-class="text-white"
        >
          <icons-v-account class="w-8 h-8 fill-current"/>
          <span class="text-sm">Войти</span>
        </nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script setup>

const {user} = useAuth()


</script>
