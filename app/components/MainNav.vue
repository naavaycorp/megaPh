<template>
  <header class="container mx-auto">
    <nav>
      <ul class="flex justify-between items-center p-4">
        <li>
          <NuxtLink
            to="/"
            class="hover:text-teal-600 text-3xl font-bold text-teal-500"
            >megaPh.</NuxtLink
          >
        </li>
        <li class="px-4 py-2 bg-teal-500 hover:bg-teal-600 rounded-md">
          <NuxtLink
            to="/announcements"
            class="text-teal-50 hover:text-teal-100 text-xl"
            >Sign In</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
