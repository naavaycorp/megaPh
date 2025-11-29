<template>
  <header class="container mx-auto">
    <nav>
      <ul class="flex justify-between items-center p-4">
        <li>
          <NuxtLink
            to="/"
            class="hover:text-teal-700 text-3xl font-bold text-teal-600"
            >megaPh.</NuxtLink
          >
        </li>
        <li class="px-4 py-2 bg-teal-600 hover:bg-teal-700 rounded-md">
          <NuxtLink
            to="/signin"
            class="text-teal-50 hover:text-teal-100 text-xl"
            >Sign In</NuxtLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
