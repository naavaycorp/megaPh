<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const open = ref(false);

const onKeydown = (e: KeyboardEvent) => {
  if ((e.key === "Escape" || e.key === "Esc") && open.value) {
    open.value = false;
  }
};

onMounted(() => {
  window.addEventListener("keydown", onKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", onKeydown);
});
</script>

<template>
  <header>
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between py-3">
        <NuxtLink
          to="/"
          class="text-2xl font-bold text-teal-500 hover:text-teal-600"
        >
          megaPh.
        </NuxtLink>

        <!-- Desktop search and actions -->
        <div class="hidden md:flex items-center gap-3">
          <input
            type="text"
            placeholder="Search announcements here"
            class="py-2 pr-4 pl-4 border border-teal-300 rounded-md w-64"
          />
          <NuxtLink
            to="/createAnnouncement"
            class="px-4 py-2 bg-teal-500 hover:bg-teal-600 rounded-md text-teal-50 text-sm"
            >Create</NuxtLink
          >

          <NuxtLink
            to="/signin"
            class="p-2 rounded-md text-gray-600 hover:text-teal-600"
          >
            <UIcon name="heroicons:cog-8-tooth" class="w-6 h-6" />
          </NuxtLink>
          <NuxtLink
            to="/signin"
            class="p-2 rounded-md text-gray-600 hover:text-teal-600"
          >
            <UIcon name="heroicons:bell-alert" class="w-6 h-6" />
          </NuxtLink>
          <NuxtLink
            to="/signin"
            class="p-2 rounded-md text-gray-600 hover:text-teal-600"
          >
            <UIcon name="heroicons:user" class="w-6 h-6" />
          </NuxtLink>

          <NuxtLink
            to="/signin"
            class="px-4 py-2 bg-teal-500 hover:bg-teal-600 rounded-md text-teal-50 text-sm"
            >Sign Out</NuxtLink
          >
        </div>

        <!-- Mobile menu button -->
        <button
          aria-label="Toggle menu"
          :aria-expanded="open"
          class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-teal-600"
          @click="open = !open"
        >
          <svg
            v-if="!open"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile panel -->
      <div v-show="open" class="md:hidden pb-4">
        <div class="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Search announcements here"
            class="py-2 pl-3 pr-3 border border-teal-300 rounded-md w-full"
          />

          <NuxtLink
            to="/createAnnouncement"
            class="w-full block text-center px-4 py-2 bg-teal-500 hover:bg-teal-600 rounded-md text-teal-50"
          >
            Create Announcement
          </NuxtLink>

          <div class="flex items-center justify-between px-1">
            <div class="flex gap-2">
              <NuxtLink
                to="/signin"
                class="p-2 rounded-md text-gray-600 hover:text-teal-600"
              >
                <UIcon name="heroicons:cog-8-tooth" class="w-6 h-6" />
              </NuxtLink>
              <NuxtLink
                to="/signin"
                class="p-2 rounded-md text-gray-600 hover:text-teal-600"
              >
                <UIcon name="heroicons:bell-alert" class="w-6 h-6" />
              </NuxtLink>
              <NuxtLink
                to="/signin"
                class="p-2 rounded-md text-gray-600 hover:text-teal-600"
              >
                <UIcon name="heroicons:user" class="w-6 h-6" />
              </NuxtLink>
            </div>

            <NuxtLink
              to="/signin"
              class="px-4 py-2 bg-teal-500 hover:bg-teal-600 rounded-md text-teal-50"
            >
              Sign Out
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
