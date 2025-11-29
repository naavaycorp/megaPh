<template>
  <section
    class="dark dark:bg-travelblack grid h-screen place-content-center bg-gray-100"
  >
    <article class="dark:bg-travelgraydark max-w-96 rounded-md bg-white">
      <header class="flex items-center justify-between p-3">
        <h2 class="font-bold dark:text-white">Notification</h2>
        <p class="text-sm text-blue-700 dark:text-sky-300">Mark as all read</p>
      </header>
      <hr class="my-2 text-gray-200 dark:text-gray-600" />
      <main class="px-5 dark:text-gray-300">
        <div class="my-3 flex items-center justify-between">
          <span class="flex items-center gap-x-1">
            <p>All</p>
            <UBadge
              label="23"
              class="rounded-full bg-blue-600 dark:bg-sky-300"
            />
          </span>
          <span class="flex items-center gap-x-1">
            <p>Following</p>
            <UBadge label="16" class="rounded-full bg-gray-200 text-black" />
          </span>
          <span class="flex items-center gap-x-1">
            <p>Threads</p>
            <UBadge label="8" class="rounded-full bg-gray-200 text-black" />
          </span>
        </div>
        <hr class="my-2 text-gray-200 dark:text-gray-600" />
        <div class="mb-5 flex flex-col gap-y-5">
          <div class="gapx-2 grid grid-cols-6">
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
                <div class="mt-3 flex items-center gap-x-2">
                  <UButton
                    label="Decline"
                    class="text-traveltextgraydark"
                    variant="outline"
                  />
                  <UButton label="Accept" />
                </div>
              </div>
            </div>
          </div>
          <div class="gapx-2 grid grid-cols-6">
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

          <div class="gapx-2 grid grid-cols-6">
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
                </span>
                <p class="mt-1">
                  Asked to join
                  <span class="font-semibold">MantaUl Dashboard.</span>
                </p>
              </div>
              <p class="border-l-accented border-l-2 pl-3">
                @Hunghoang It's such an amazing design system, I am currently
                trying to make a variation of some of the components.
              </p>
              <UButton
                label="Reply"
                variant="outline"
                class="text-traveltextgraydark w-fit"
              />
            </div>
          </div>

          <div class="gapx-2 grid grid-cols-6">
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
                </span>
                <p class="mt-1">
                  Asked to join
                  <span class="font-semibold">MantaUl Dashboard.</span>
                </p>
              </div>
              <div class="flex items-center gap-x-2">
                <p class="rounded-full bg-gray-100 px-2 py-1 dark:bg-gray-700">
                  #Treaking
                </p>
                <p class="rounded-full bg-gray-100 px-2 py-1 dark:bg-gray-700">
                  #Trip
                </p>
                <p class="rounded-full bg-gray-100 px-2 py-1 dark:bg-gray-700">
                  #Budged
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer
        class="m-5 rounded-lg bg-blue-600 px-4 py-2 text-center text-white"
      >
        <p>View All Notifications</p>
      </footer>
    </article>
  </section>
</template>
