<template>
  <section
    class="dark dark:bg-travelblack grid place-content-center bg-gray-100 shadow-lg"
  >
    <article class="dark:bg-travelgraydark max-w-96 rounded-md bg-white">
      <header class="flex items-center justify-between p-3">
        <h2 class="font-bold dark:text-white text-teal-600">Notification</h2>
        <p class="text-sm text-teal-700 dark:text-teal-300">Mark as all read</p>
      </header>
      <hr class="my-2 text-gray-200 dark:text-gray-600" />
      <main class="px-5 dark:text-gray-300">
        <div class="my-3 flex items-center justify-between">
          <span class="flex items-center gap-x-1">
            <p>All</p>
            <UBadge
              label="23"
              class="rounded-full bg-teal-700 dark:bg-teal-300 text-white dark:text-black py-1 px-2"
            />
          </span>
          <span class="flex items-center gap-x-1">
            <p>Following</p>
            <UBadge
              label="16"
              class="rounded-full bg-gray-200 text-black py-1 px-2"
            />
          </span>
          <span class="flex items-center gap-x-1">
            <p>Threads</p>
            <UBadge
              label="8"
              class="rounded-full bg-gray-200 text-black py-1 px-2 py-1 px-2"
            />
          </span>
        </div>
        <hr class="my-2 text-gray-200 dark:text-gray-600" />
        <div class="my-5 flex flex-col gap-y-10">
          <div class="gap-x-2 grid grid-cols-6">
            <div class="col-span-1">
              <UAvatar src="https://github.com/benjamincanac.png" size="xl" />
            </div>
            <div class="col-span-5 flex flex-col gap-y-5">
              <div class="flex flex-col">
                <span class="flex items-center justify-between">
                  <p>
                    Jane Cooper
                    <span class="text-xs font-light">2 mins ago</span>
                  </p>
                  <UChip />
                </span>
                <p class="mt-1">
                  Asked to join
                  <span class="font-semibold">MantaUl Dashboard.</span>
                </p>
              </div>
            </div>
          </div>

          <div class="gap-x-2 grid grid-cols-6">
            <div class="col-span-1">
              <UAvatar src="https://github.com/benjamincanac.png" size="xl" />
            </div>
            <div class="col-span-5 flex flex-col gap-y-5">
              <div class="flex flex-col">
                <span class="flex items-center justify-between">
                  <p>
                    Jane Cooper
                    <span class="text-xs font-light">2 mins ago</span>
                  </p>
                  <UChip />
                </span>
                <p class="mt-1">
                  Asked to join
                  <span class="font-semibold">MantaUl Dashboard.</span>
                </p>
              </div>
            </div>
          </div>

          <div class="gap-x-2 grid grid-cols-6">
            <div class="col-span-1">
              <UAvatar src="https://github.com/benjamincanac.png" size="xl" />
            </div>
            <div class="col-span-5 flex flex-col gap-y-5">
              <div class="flex flex-col">
                <span class="flex items-center justify-between">
                  <p>
                    Jane Cooper
                    <span class="text-xs font-light">2 mins ago</span>
                  </p>
                  <UChip />
                </span>
                <p class="mt-1">
                  Asked to join
                  <span class="font-semibold">MantaUl Dashboard.</span>
                </p>
              </div>
            </div>
          </div>

          <div class="gap-x-2 grid grid-cols-6">
            <div class="col-span-1">
              <UAvatar src="https://github.com/benjamincanac.png" size="xl" />
            </div>
            <div class="col-span-5 flex flex-col gap-y-5">
              <div class="flex flex-col">
                <span class="flex items-center justify-between">
                  <p>
                    Jane Cooper
                    <span class="text-xs font-light">2 mins ago</span>
                  </p>
                  <UChip />
                </span>
                <p class="mt-1">
                  Asked to join
                  <span class="font-semibold">MantaUl Dashboard.</span>
                </p>
              </div>
            </div>
          </div>

          <div class="gap-x-2 grid grid-cols-6">
            <div class="col-span-1">
              <UAvatar src="https://github.com/benjamincanac.png" size="xl" />
            </div>
            <div class="col-span-5 flex flex-col gap-y-5">
              <div class="flex flex-col">
                <span class="flex items-center justify-between">
                  <p>
                    Jane Cooper
                    <span class="text-xs font-light">2 mins ago</span>
                  </p>
                  <UChip />
                </span>
                <p class="mt-1">
                  Asked to join
                  <span class="font-semibold">MantaUl Dashboard.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer
        class="m-5 rounded-lg bg-teal-600 px-4 py-2 text-center text-white"
      >
        <p>View All Notifications</p>
      </footer>
    </article>
  </section>
</template>
