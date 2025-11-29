<template>
  <div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
    <h2 class="mb-8 py-4 text-center text-2xl font-semibold sm:text-3xl">
      Profile Settings
    </h2>
    <div class="grid w-full grid-cols-1 gap-6 md:grid-cols-4 md:gap-8">
      <!-- Sidebar Navigation -->
      <div
        class="rounded-lg border border-gray-200 p-4 dark:border-gray-700 md:col-span-1"
      >
        <h2 class="mt-2 mb-6 text-lg font-semibold">Settings</h2>
        <ul class="flex flex-row gap-2 overflow-x-auto md:flex-col md:gap-y-3">
          <li
            class="min-w-max rounded-md bg-teal-600 px-4 py-2 font-semibold text-white md:bg-teal-600"
          >
            Personal
          </li>
          <li
            class="min-w-max cursor-pointer rounded-md px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Contributions
          </li>
          <li
            class="min-w-max cursor-pointer rounded-md px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Following
          </li>
          <li
            class="min-w-max cursor-pointer rounded-md px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Friends
          </li>
          <li
            class="min-w-max cursor-pointer rounded-md px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Community
          </li>
          <li
            class="min-w-max cursor-pointer rounded-md px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Group
          </li>
          <li
            class="min-w-max cursor-pointer rounded-md px-4 py-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
          >
            Delete Account
          </li>
        </ul>
      </div>

      <!-- Main Content -->
      <div
        class="flex flex-col gap-y-5 rounded-lg border border-gray-200 px-4 py-5 dark:border-gray-700 md:col-span-3 md:px-8"
      >
        <div class="flex flex-col gap-y-6">
          <!-- Profile Header -->
          <div
            class="flex flex-col gap-y-4 rounded-lg p-4 ring-1 ring-gray-200 dark:ring-gray-600 sm:gap-y-6 sm:p-5 md:flex-row md:items-center md:gap-x-6"
          >
            <div class="flex justify-center md:justify-start">
              <UAvatar
                src="https://github.com/benjamincanac.png"
                class="h-20 w-20 rounded-full sm:h-24 sm:w-24"
              />
            </div>
            <div class="flex-1 text-center md:text-left">
              <h2 class="mb-2 text-lg font-semibold sm:text-xl">
                Yuvaraj Chenniapan
              </h2>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Vlogger & Traveler
              </p>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Ganapathy, Coimbatore, Tamil Nadu
              </p>
            </div>
            <div class="flex justify-center md:justify-end">
              <button
                class="flex items-center gap-x-2 rounded-full border border-gray-200 px-3 py-1 text-sm hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800"
              >
                <p>Edit</p>
                <UIcon name="pencil" class="size-4" />
              </button>
            </div>
          </div>

          <!-- Personal Information -->
          <div
            class="flex flex-col gap-y-4 rounded-lg p-4 ring-1 ring-gray-200 dark:ring-gray-600 sm:gap-y-5 sm:p-5"
          >
            <div
              class="flex flex-col items-start gap-y-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <p class="text-base font-medium sm:text-lg">
                Personal Information
              </p>
              <button
                class="flex items-center gap-x-2 rounded-full border border-gray-200 px-3 py-1 text-sm hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800"
              >
                <p>Edit</p>
                <UIcon name="pencil" class="size-4" />
              </button>
            </div>

            <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div class="flex flex-col gap-y-2 sm:gap-y-3">
                <label class="text-xs font-light uppercase tracking-wide"
                  >First Name</label
                >
                <p class="text-sm font-semibold">Yuvaraj</p>
              </div>

              <div class="flex flex-col gap-y-2 sm:gap-y-3">
                <label class="text-xs font-light uppercase tracking-wide"
                  >Last Name</label
                >
                <p class="text-sm font-semibold">Chenniappan</p>
              </div>

              <div class="flex flex-col gap-y-2 sm:gap-y-3">
                <label class="text-xs font-light uppercase tracking-wide"
                  >Email</label
                >
                <p class="text-sm font-semibold">yuvaraj2323@gmail.com</p>
              </div>

              <div class="flex flex-col gap-y-2 sm:gap-y-3">
                <label class="text-xs font-light uppercase tracking-wide"
                  >Phone No</label
                >
                <p class="text-sm font-semibold">6384123073</p>
              </div>

              <div class="flex flex-col gap-y-2 sm:gap-y-3 sm:col-span-2">
                <label class="text-xs font-light uppercase tracking-wide"
                  >Bio</label
                >
                <p class="text-sm font-semibold">Vlogger and Traveller</p>
              </div>
            </div>
          </div>

          <!-- Address Information -->
          <div
            class="flex flex-col gap-y-4 rounded-lg p-4 ring-1 ring-gray-200 dark:ring-gray-600 sm:gap-y-5 sm:p-5"
          >
            <div
              class="flex flex-col items-start gap-y-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <p class="text-base font-medium sm:text-lg">Address</p>
              <button
                class="flex items-center gap-x-2 rounded-full border border-gray-200 px-3 py-1 text-sm hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800"
              >
                <p>Edit</p>
                <UIcon name="pencil" class="size-4" />
              </button>
            </div>

            <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div class="flex flex-col gap-y-2 sm:gap-y-3">
                <label class="text-xs font-light uppercase tracking-wide"
                  >Country</label
                >
                <p class="text-sm font-semibold">India</p>
              </div>

              <div class="flex flex-col gap-y-2 sm:gap-y-3">
                <label class="text-xs font-light uppercase tracking-wide"
                  >City / State</label
                >
                <p class="text-sm font-semibold">Coimbatore, Tamilnadu</p>
              </div>

              <div class="flex flex-col gap-y-2 sm:gap-y-3">
                <label class="text-xs font-light uppercase tracking-wide"
                  >Postal Code</label
                >
                <p class="text-sm font-semibold">641006</p>
              </div>

              <div class="flex flex-col gap-y-2 sm:gap-y-3">
                <label class="text-xs font-light uppercase tracking-wide"
                  >Tax ID</label
                >
                <p class="text-sm font-semibold">6384123073</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "custom",
});
</script>
