<template>
  <div class="dark:bg-travelblack h-full bg-gray-200 p-4">
    <header
      class="dark:bg-travelgraydark flex flex-col gap-y-1 rounded-md bg-white p-2 sm:flex-row sm:items-center sm:justify-between sm:gap-y-0 sm:rounded-xl sm:p-4"
    >
      <div class="mr-24 mb-5 flex items-center gap-x-2 sm:mb-0">
        <a
          href="#"
          class="bg-travellogo flex h-10 w-10 items-center justify-center rounded-md"
        >
          <UIcon
            name="affiliate"
            class="dark:text-travelblack size-7 text-white"
          />
        </a>
        <span class="text-2xl font-semibold dark:text-gray-300">Raveller</span>
      </div>

      <div>
        <nav class="mb-5 sm:mb-0">
          <ul class="flex flex-col gap-4 sm:flex-row sm:items-center">
            <li
              class="bg-travellogo w-full rounded-md p-2 sm:w-fit sm:rounded-none sm:bg-transparent"
            >
              <a
                href="/"
                class="sm:text-travelblack text-white dark:text-gray-200"
              >
                Places
              </a>
            </li>
            <li>
              <a href="/community" class="text-travelblack dark:text-gray-200">
                Community
              </a>
            </li>
            <li>
              <a href="/blog" class="text-travelblack dark:text-gray-200">
                Blog
              </a>
            </li>
            <li>
              <a href="/events" class="text-travelblack dark:text-gray-200">
                Events
              </a>
            </li>
            <li>
              <a href="/meetings" class="text-travelblack dark:text-gray-200">
                Meetings
              </a>
            </li>
            <li>
              <a
                href="/announcements"
                class="text-travelblack dark:text-gray-200"
              >
                Announcements
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="sm:ml-auto">
        <a href="/create">
          <UButton
            icon="pencil"
            size="xl"
            variant="solid"
            class="bg-travelpurpledark dark:bg-travelgreenlight w-full px-4 py-3 sm:w-fit"
            >Create a Post</UButton
          >
        </a>
      </div>

      <div class="mr-6 ml-auto hidden sm:flex sm:items-center sm:gap-x-4">
        <a href="/notification">
          <span>
            <UIcon name="bell" class="size-7 text-gray-400" />
          </span>
        </a>
        <a href="#">
          <span>
            <UIcon name="settings" class="size-7 text-gray-400" />
          </span>
        </a>
      </div>

      <div class="flex items-center gap-x-6">
        <div
          class="dark:bg-travelblack hidden rounded-full bg-gray-100 p-1 sm:flex"
        >
          <UButton
            icon="sun"
            size="xl"
            variant="solid"
            class="text-travelblack bg-transparent hover:bg-transparent dark:text-white"
          />
          <UButton
            icon="moon"
            size="xl"
            variant="solid"
            class="bg-travelbuttonbluemd rounded-full"
          />
        </div>

        <UAvatar
          size="xl"
          src="https://github.com/benjamincanac.png"
          :chip="{
            inset: true,
          }"
          class="hidden sm:flex"
        />
        <UButton
          icon="logout"
          size="xl"
          variant="solid"
          class="bg-travelbuttonbluemd w-full px-4 py-3 sm:w-fit"
          >Log Out</UButton
        >
      </div>
    </header>

    <main class="dark:text-gray-300">
      <section>
        <div class="my-4 grid min-h-max grid-cols-18 gap-4">
          <div
            class="dark:bg-travelgraydark hidden rounded-xl bg-white sm:col-span-1 sm:grid"
          >
            <ul class="flex flex-col items-center gap-y-12 py-8">
              <li>
                <a href="#">
                  <UIcon
                    name="map_pin"
                    class="size-7 text-gray-600 dark:text-gray-400"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <UIcon
                    name="users"
                    class="size-7 text-gray-600 dark:text-gray-400"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <UIcon
                    name="edit_circle"
                    class="size-7 text-gray-600 dark:text-gray-400"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <UIcon
                    name="calendar_user"
                    class="size-7 text-gray-600 dark:text-gray-400"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <UIcon
                    name="user_screen"
                    class="size-7 text-gray-600 dark:text-gray-400"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <UIcon
                    name="volume"
                    class="size-7 text-gray-600 dark:text-gray-400"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div class="dark:bg-travelgraymid col-span-17 rounded-xl bg-white">
            <div class="container mx-auto my-10 max-w-10/12">
              <h2 class="mb-5 py-5 text-center text-2xl font-semibold">
                Profile Settings
              </h2>
              <div class="grid w-full grid-cols-4 gap-x-10">
                <div
                  class="col-span-1 rounded-lg border border-gray-200 p-5 dark:border-gray-700"
                >
                  <h2 class="mt-2 mb-8 text-lg font-semibold">Settings</h2>
                  <ul class="flex flex-col gap-y-5">
                    <li class="bg-travellogo rounded-md px-4 py-2 text-sky-100">
                      Personal
                    </li>
                    <li class="rounded-md px-4 py-2">Contributions</li>
                    <li class="rounded-md px-4 py-2">Following</li>
                    <li class="rounded-md px-4 py-2">Friends</li>
                    <li class="rounded-md px-4 py-2">Community</li>
                    <li class="rounded-md px-4 py-2">Group</li>
                    <li class="rounded-md px-4 py-2 text-red-500">
                      Delete Account
                    </li>
                  </ul>
                </div>
                <div
                  class="col-span-3 flex flex-col gap-y-5 rounded-lg border border-gray-200 px-10 py-5 dark:border-gray-700"
                >
                  <!-- <h2 class="text-lg font-semibold mt-2 mb-8">Personal Info</h2> -->
                  <div class="flex flex-col gap-y-8">
                    <div
                      class="flex items-center gap-x-10 rounded-lg p-5 ring-1 ring-gray-200 dark:ring-gray-600"
                    >
                      <div>
                        <UAvatar
                          src="https://github.com/benjamincanac.png"
                          class="h-24 w-24 rounded-full"
                        />
                      </div>
                      <div>
                        <h2 class="mb-2 text-lg font-semibold">
                          Yuvaraj Chenniapan
                        </h2>
                        <p class="text-sm">Vlogger & Traveler</p>
                        <p class="text-sm">Ganapathy, Coimbatore, Tamil Nadu</p>
                      </div>
                      <div
                        class="ml-auto flex items-center gap-x-3 rounded-full px-3 py-1 ring-1 ring-gray-200 dark:ring-gray-600"
                      >
                        <p class="text-sm">Edit</p>
                        <UIcon name="pencil" class="size-5" />
                      </div>
                    </div>

                    <div
                      class="flex flex-col gap-y-5 rounded-lg p-5 ring-1 ring-gray-200 dark:ring-gray-600"
                    >
                      <div class="flex items-center justify-between">
                        <p class="mb-5">Personal Information</p>
                        <div
                          class="ml-auto flex items-center gap-x-3 rounded-full px-3 py-1 ring-1 ring-gray-200 dark:ring-gray-600"
                        >
                          <p class="text-sm">Edit</p>
                          <UIcon name="pencil" class="size-5" />
                        </div>
                      </div>

                      <div class="grid grid-cols-8 gap-5">
                        <div class="col-span-3 space-y-10">
                          <div class="flex flex-col gap-y-3">
                            <label for="Name" class="text-xs font-light">
                              First Name
                            </label>
                            <p class="text-sm font-semibold">Yuvaraj</p>
                          </div>

                          <div class="flex flex-col gap-y-3">
                            <label for="Name" class="text-xs font-light">
                              Email
                            </label>
                            <p class="text-sm font-semibold">
                              yuvaraj2323@gmail.com
                            </p>
                          </div>

                          <div class="flex flex-col gap-y-3">
                            <label for="Name" class="text-xs font-light">
                              Bio
                            </label>
                            <p class="text-sm font-semibold">
                              Vlogger and Traveller
                            </p>
                          </div>
                        </div>
                        <div class="col-span-5 space-y-15">
                          <div class="flex flex-col gap-y-3">
                            <label for="Name" class="text-xs font-light">
                              Last Name
                            </label>
                            <p class="text-sm font-semibold">Chenniappan</p>
                          </div>

                          <div class="flex flex-col gap-y-3">
                            <label for="Name" class="text-xs font-light">
                              Phone No
                            </label>
                            <p class="text-sm font-semibold">6384123073</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="flex flex-col gap-y-5 rounded-lg p-5 ring-1 ring-gray-200 dark:ring-gray-600"
                    >
                      <div class="flex items-center justify-between">
                        <p class="mb-5">Address</p>
                        <div
                          class="ml-auto flex items-center gap-x-3 rounded-full px-3 py-1 ring-1 ring-gray-200 dark:ring-gray-600"
                        >
                          <p class="text-sm">Edit</p>
                          <UIcon name="pencil" class="size-5" />
                        </div>
                      </div>

                      <div class="grid grid-cols-8 gap-5">
                        <div class="col-span-3 space-y-10">
                          <div class="flex flex-col gap-y-3">
                            <label for="Name" class="text-xs font-light">
                              Country
                            </label>
                            <p class="text-sm font-semibold">India</p>
                          </div>

                          <div class="flex flex-col gap-y-3">
                            <label for="Name" class="text-xs font-light">
                              City / State
                            </label>
                            <p class="text-sm font-semibold">
                              Coimbatore, Tamilnadu
                            </p>
                          </div>
                        </div>
                        <div class="col-span-5 space-y-10">
                          <div class="flex flex-col gap-y-3">
                            <label for="Name" class="text-xs font-light">
                              Postal Code
                            </label>
                            <p class="text-sm font-semibold">641006</p>
                          </div>

                          <div class="flex flex-col gap-y-3">
                            <label for="Name" class="text-xs font-light">
                              Tax ID
                            </label>
                            <p class="text-sm font-semibold">6384123073</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
const formats = ref<TabsItem[]>([
  {
    label: "Text",
  },
  {
    label: "image",
  },
  {
    label: "audio",
  },
  {
    label: "video",
  },
]);

const communities = ref(["Backlog", "Todo", "In Progress", "Done"]);
const value = ref("Select Community");
</script>
