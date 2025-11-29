<script setup lang="ts">
definePageMeta({ layout: "custom" });
</script>

<template>
  <main>
    <section class="container mx-auto mt-10 px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          class="prose lg:prose-sm col-span-1 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
        >
          <NuxtLink to="/announcement">
            <nuxt-img
              src="/img/megaphone.jpg"
              alt="Announcements Banner"
              width="100%"
              height="100%"
              class="rounded-md mb-1"
            />
            <h3 class="text-xl font-bold text-teal-600 my-2">Announcements</h3>
            <p class="text-lg text-teal-700 truncate my-2">
              Welcome to the announcements page! Stay updated with the latest
              news, events, and important information from our community. Here,
              you'll find all the announcements you need to stay informed and
              connected.
            </p>
            <!-- <div>
            <span class="text-sm text-gray-500">Read more...</span>
          </div> -->
            <div class="my-2">
              <span>
                Posted on
                <time datetime="2024-01-15" class="text-sm text-gray-500"
                  >January 15, 2024</time
                >
              </span>
              <span>
                • by
                <span class="text-sm text-gray-500">Admin</span>
              </span>
              <span> • 5 min read </span>
              <span>
                • Category:
                <span class="text-sm text-gray-500">General</span>
              </span>
              <span>
                • Tags:
                <span class="text-sm text-gray-500">Updates, News</span>
              </span>
              <span>
                • Comments:
                <span class="text-sm text-gray-500">12</span>
              </span>
              <span>
                • Likes:
                <span class="text-sm text-gray-500">34</span>
              </span>
              <span>
                • Shares:
                <span class="text-sm text-gray-500">8</span>
              </span>
              <span>
                • Views:
                <span class="text-sm text-gray-500">256</span>
              </span>
              <span>
                • Edited:
                <span class="text-sm text-gray-500">Yes</span>
              </span>
              <span>
                • Featured:
                <span class="text-sm text-gray-500">No</span>
              </span>
              <span>
                • Status:
                <span class="text-sm text-gray-500">Published</span>
              </span>
              <span>
                • Priority:
                <span class="text-sm text-gray-500">High</span>
              </span>
            </div>
            <div class="my-2">
              <span>
                • Comments Enabled:
                <span class="text-sm text-gray-500">Yes</span>
              </span>
              <span>
                • Visibility:
                <span class="text-sm text-gray-500">Public</span>
              </span>
            </div>
            <div>
              <span>
                • Location:
                <span class="text-sm text-gray-500">Global</span>
              </span>
            </div>
            <div class="flex justify-between items-center">
              <UButton
                variant="solid"
                size="sm"
                class="mt-2 py-2 px-4 bg-teal-500 hover:bg-teal-600 text-white rounded-md"
                >Share</UButton
              >
              <UButton
                variant="outline"
                size="sm"
                class="mt-2 py-2 px-4 rounded-md text-red-300"
                >Validity upto : 27-04-2024</UButton
              >
            </div>
          </NuxtLink>
        </article>

        <article
          class="prose lg:prose-sm col-span-1 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
        >
          <NuxtLink to="/">
            <nuxt-img
              src="/img/megaphone.jpg"
              alt="Announcements Banner"
              width="100%"
              height="100%"
              class="rounded-md mb-1"
            />
            <h3 class="text-xl font-bold text-teal-600 my-2">Announcements</h3>
            <p class="text-lg text-teal-700 truncate my-2">
              Welcome to the announcements page! Stay updated with the latest
              news, events, and important information from our community. Here,
              you'll find all the announcements you need to stay informed and
              connected.
            </p>
            <!-- <div>
            <span class="text-sm text-gray-500">Read more...</span>
          </div> -->
            <div class="my-2">
              <span>
                Posted on
                <time datetime="2024-01-15" class="text-sm text-gray-500"
                  >January 15, 2024</time
                >
              </span>
              <span>
                • by
                <span class="text-sm text-gray-500">Admin</span>
              </span>
              <span> • 5 min read </span>
              <span>
                • Category:
                <span class="text-sm text-gray-500">General</span>
              </span>
              <span>
                • Tags:
                <span class="text-sm text-gray-500">Updates, News</span>
              </span>
              <span>
                • Comments:
                <span class="text-sm text-gray-500">12</span>
              </span>
              <span>
                • Likes:
                <span class="text-sm text-gray-500">34</span>
              </span>
              <span>
                • Shares:
                <span class="text-sm text-gray-500">8</span>
              </span>
              <span>
                • Views:
                <span class="text-sm text-gray-500">256</span>
              </span>
              <span>
                • Edited:
                <span class="text-sm text-gray-500">Yes</span>
              </span>
              <span>
                • Featured:
                <span class="text-sm text-gray-500">No</span>
              </span>
              <span>
                • Status:
                <span class="text-sm text-gray-500">Published</span>
              </span>
              <span>
                • Priority:
                <span class="text-sm text-gray-500">High</span>
              </span>
            </div>
            <div class="my-2">
              <span>
                • Comments Enabled:
                <span class="text-sm text-gray-500">Yes</span>
              </span>
              <span>
                • Visibility:
                <span class="text-sm text-gray-500">Public</span>
              </span>
            </div>
            <div>
              <span>
                • Location:
                <span class="text-sm text-gray-500">Global</span>
              </span>
            </div>
            <div class="flex justify-between items-center">
              <UButton
                variant="solid"
                size="sm"
                class="mt-2 py-2 px-4 bg-teal-500 hover:bg-teal-600 text-white rounded-md"
                >Share</UButton
              >
              <UButton
                variant="outline"
                size="sm"
                class="mt-2 py-2 px-4 rounded-md text-red-300"
                >Validity upto : 27-04-2024</UButton
              >
            </div>
          </NuxtLink>
        </article>

        <article
          class="prose lg:prose-sm col-span-1 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
        >
          <NuxtLink to="/">
            <nuxt-img
              src="/img/megaphone.jpg"
              alt="Announcements Banner"
              width="100%"
              height="100%"
              class="rounded-md mb-1"
            />
            <h3 class="text-xl font-bold text-teal-600 my-2">Announcements</h3>
            <p class="text-lg text-teal-700 truncate my-2">
              Welcome to the announcements page! Stay updated with the latest
              news, events, and important information from our community. Here,
              you'll find all the announcements you need to stay informed and
              connected.
            </p>
            <!-- <div>
            <span class="text-sm text-gray-500">Read more...</span>
          </div> -->
            <div class="my-2">
              <span>
                Posted on
                <time datetime="2024-01-15" class="text-sm text-gray-500"
                  >January 15, 2024</time
                >
              </span>
              <span>
                • by
                <span class="text-sm text-gray-500">Admin</span>
              </span>
              <span> • 5 min read </span>
              <span>
                • Category:
                <span class="text-sm text-gray-500">General</span>
              </span>
              <span>
                • Tags:
                <span class="text-sm text-gray-500">Updates, News</span>
              </span>
              <span>
                • Comments:
                <span class="text-sm text-gray-500">12</span>
              </span>
              <span>
                • Likes:
                <span class="text-sm text-gray-500">34</span>
              </span>
              <span>
                • Shares:
                <span class="text-sm text-gray-500">8</span>
              </span>
              <span>
                • Views:
                <span class="text-sm text-gray-500">256</span>
              </span>
              <span>
                • Edited:
                <span class="text-sm text-gray-500">Yes</span>
              </span>
              <span>
                • Featured:
                <span class="text-sm text-gray-500">No</span>
              </span>
              <span>
                • Status:
                <span class="text-sm text-gray-500">Published</span>
              </span>
              <span>
                • Priority:
                <span class="text-sm text-gray-500">High</span>
              </span>
            </div>
            <div class="my-2">
              <span>
                • Comments Enabled:
                <span class="text-sm text-gray-500">Yes</span>
              </span>
              <span>
                • Visibility:
                <span class="text-sm text-gray-500">Public</span>
              </span>
            </div>
            <div>
              <span>
                • Location:
                <span class="text-sm text-gray-500">Global</span>
              </span>
            </div>
            <div class="flex justify-between items-center">
              <UButton
                variant="solid"
                size="sm"
                class="mt-2 py-2 px-4 bg-teal-500 hover:bg-teal-600 text-white rounded-md"
                >Share</UButton
              >
              <UButton
                variant="outline"
                size="sm"
                class="mt-2 py-2 px-4 rounded-md text-red-300"
                >Validity upto : 27-04-2024</UButton
              >
            </div>
          </NuxtLink>
        </article>

        <article
          class="prose lg:prose-sm col-span-1 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
        >
          <NuxtLink to="/">
            <nuxt-img
              src="/img/megaphone.jpg"
              alt="Announcements Banner"
              width="100%"
              height="100%"
              class="rounded-md mb-1"
            />
            <h3 class="text-xl font-bold text-teal-600 my-2">Announcements</h3>
            <p class="text-lg text-teal-700 truncate my-2">
              Welcome to the announcements page! Stay updated with the latest
              news, events, and important information from our community. Here,
              you'll find all the announcements you need to stay informed and
              connected.
            </p>
            <!-- <div>
            <span class="text-sm text-gray-500">Read more...</span>
          </div> -->
            <div class="my-2">
              <span>
                Posted on
                <time datetime="2024-01-15" class="text-sm text-gray-500"
                  >January 15, 2024</time
                >
              </span>
              <span>
                • by
                <span class="text-sm text-gray-500">Admin</span>
              </span>
              <span> • 5 min read </span>
              <span>
                • Category:
                <span class="text-sm text-gray-500">General</span>
              </span>
              <span>
                • Tags:
                <span class="text-sm text-gray-500">Updates, News</span>
              </span>
              <span>
                • Comments:
                <span class="text-sm text-gray-500">12</span>
              </span>
              <span>
                • Likes:
                <span class="text-sm text-gray-500">34</span>
              </span>
              <span>
                • Shares:
                <span class="text-sm text-gray-500">8</span>
              </span>
              <span>
                • Views:
                <span class="text-sm text-gray-500">256</span>
              </span>
              <span>
                • Edited:
                <span class="text-sm text-gray-500">Yes</span>
              </span>
              <span>
                • Featured:
                <span class="text-sm text-gray-500">No</span>
              </span>
              <span>
                • Status:
                <span class="text-sm text-gray-500">Published</span>
              </span>
              <span>
                • Priority:
                <span class="text-sm text-gray-500">High</span>
              </span>
            </div>
            <div class="my-2">
              <span>
                • Comments Enabled:
                <span class="text-sm text-gray-500">Yes</span>
              </span>
              <span>
                • Visibility:
                <span class="text-sm text-gray-500">Public</span>
              </span>
            </div>
            <div>
              <span>
                • Location:
                <span class="text-sm text-gray-500">Global</span>
              </span>
            </div>
            <div class="flex justify-between items-center">
              <UButton
                variant="solid"
                size="sm"
                class="mt-2 py-2 px-4 bg-teal-500 hover:bg-teal-600 text-white rounded-md"
                >Share</UButton
              >
              <UButton
                variant="outline"
                size="sm"
                class="mt-2 py-2 px-4 rounded-md text-red-300"
                >Validity upto : 27-04-2024</UButton
              >
            </div>
          </NuxtLink>
        </article>

        <article
          class="prose lg:prose-sm col-span-1 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
        >
          <NuxtLink to="/">
            <nuxt-img
              src="/img/megaphone.jpg"
              alt="Announcements Banner"
              width="100%"
              height="100%"
              class="rounded-md mb-1"
            />
            <h3 class="text-xl font-bold text-teal-600 my-2">Announcements</h3>
            <p class="text-lg text-teal-700 truncate my-2">
              Welcome to the announcements page! Stay updated with the latest
              news, events, and important information from our community. Here,
              you'll find all the announcements you need to stay informed and
              connected.
            </p>
            <!-- <div>
            <span class="text-sm text-gray-500">Read more...</span>
          </div> -->
            <div class="my-2">
              <span>
                Posted on
                <time datetime="2024-01-15" class="text-sm text-gray-500"
                  >January 15, 2024</time
                >
              </span>
              <span>
                • by
                <span class="text-sm text-gray-500">Admin</span>
              </span>
              <span> • 5 min read </span>
              <span>
                • Category:
                <span class="text-sm text-gray-500">General</span>
              </span>
              <span>
                • Tags:
                <span class="text-sm text-gray-500">Updates, News</span>
              </span>
              <span>
                • Comments:
                <span class="text-sm text-gray-500">12</span>
              </span>
              <span>
                • Likes:
                <span class="text-sm text-gray-500">34</span>
              </span>
              <span>
                • Shares:
                <span class="text-sm text-gray-500">8</span>
              </span>
              <span>
                • Views:
                <span class="text-sm text-gray-500">256</span>
              </span>
              <span>
                • Edited:
                <span class="text-sm text-gray-500">Yes</span>
              </span>
              <span>
                • Featured:
                <span class="text-sm text-gray-500">No</span>
              </span>
              <span>
                • Status:
                <span class="text-sm text-gray-500">Published</span>
              </span>
              <span>
                • Priority:
                <span class="text-sm text-gray-500">High</span>
              </span>
            </div>
            <div class="my-2">
              <span>
                • Comments Enabled:
                <span class="text-sm text-gray-500">Yes</span>
              </span>
              <span>
                • Visibility:
                <span class="text-sm text-gray-500">Public</span>
              </span>
            </div>
            <div>
              <span>
                • Location:
                <span class="text-sm text-gray-500">Global</span>
              </span>
            </div>
            <div class="flex justify-between items-center">
              <UButton
                variant="solid"
                size="sm"
                class="mt-2 py-2 px-4 bg-teal-500 hover:bg-teal-600 text-white rounded-md"
                >Share</UButton
              >
              <UButton
                variant="outline"
                size="sm"
                class="mt-2 py-2 px-4 rounded-md text-red-300"
                >Validity upto : 27-04-2024</UButton
              >
            </div>
          </NuxtLink>
        </article>

        <article
          class="prose lg:prose-sm col-span-1 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
        >
          <NuxtLink to="/">
            <nuxt-img
              src="/img/megaphone.jpg"
              alt="Announcements Banner"
              width="100%"
              height="100%"
              class="rounded-md mb-1"
            />
            <h3 class="text-xl font-bold text-teal-600 my-2">Announcements</h3>
            <p class="text-lg text-teal-700 truncate my-2">
              Welcome to the announcements page! Stay updated with the latest
              news, events, and important information from our community. Here,
              you'll find all the announcements you need to stay informed and
              connected.
            </p>
            <!-- <div>
            <span class="text-sm text-gray-500">Read more...</span>
          </div> -->
            <div class="my-2">
              <span>
                Posted on
                <time datetime="2024-01-15" class="text-sm text-gray-500"
                  >January 15, 2024</time
                >
              </span>
              <span>
                • by
                <span class="text-sm text-gray-500">Admin</span>
              </span>
              <span> • 5 min read </span>
              <span>
                • Category:
                <span class="text-sm text-gray-500">General</span>
              </span>
              <span>
                • Tags:
                <span class="text-sm text-gray-500">Updates, News</span>
              </span>
              <span>
                • Comments:
                <span class="text-sm text-gray-500">12</span>
              </span>
              <span>
                • Likes:
                <span class="text-sm text-gray-500">34</span>
              </span>
              <span>
                • Shares:
                <span class="text-sm text-gray-500">8</span>
              </span>
              <span>
                • Views:
                <span class="text-sm text-gray-500">256</span>
              </span>
              <span>
                • Edited:
                <span class="text-sm text-gray-500">Yes</span>
              </span>
              <span>
                • Featured:
                <span class="text-sm text-gray-500">No</span>
              </span>
              <span>
                • Status:
                <span class="text-sm text-gray-500">Published</span>
              </span>
              <span>
                • Priority:
                <span class="text-sm text-gray-500">High</span>
              </span>
            </div>
            <div class="my-2">
              <span>
                • Comments Enabled:
                <span class="text-sm text-gray-500">Yes</span>
              </span>
              <span>
                • Visibility:
                <span class="text-sm text-gray-500">Public</span>
              </span>
            </div>
            <div>
              <span>
                • Location:
                <span class="text-sm text-gray-500">Global</span>
              </span>
            </div>
            <div class="flex justify-between items-center">
              <UButton
                variant="solid"
                size="sm"
                class="mt-2 py-2 px-4 bg-teal-500 hover:bg-teal-600 text-white rounded-md"
                >Share</UButton
              >
              <UButton
                variant="outline"
                size="sm"
                class="mt-2 py-2 px-4 rounded-md text-red-300"
                >Validity upto : 27-04-2024</UButton
              >
            </div>
          </NuxtLink>
        </article>

        <article
          class="prose lg:prose-sm col-span-1 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
        >
          <NuxtLink to="/">
            <nuxt-img
              src="/img/megaphone.jpg"
              alt="Announcements Banner"
              width="100%"
              height="100%"
              class="rounded-md mb-1"
            />
            <h3 class="text-xl font-bold text-teal-600 my-2">Announcements</h3>
            <p class="text-lg text-teal-700 truncate my-2">
              Welcome to the announcements page! Stay updated with the latest
              news, events, and important information from our community. Here,
              you'll find all the announcements you need to stay informed and
              connected.
            </p>
            <!-- <div>
            <span class="text-sm text-gray-500">Read more...</span>
          </div> -->
            <div class="my-2">
              <span>
                Posted on
                <time datetime="2024-01-15" class="text-sm text-gray-500"
                  >January 15, 2024</time
                >
              </span>
              <span>
                • by
                <span class="text-sm text-gray-500">Admin</span>
              </span>
              <span> • 5 min read </span>
              <span>
                • Category:
                <span class="text-sm text-gray-500">General</span>
              </span>
              <span>
                • Tags:
                <span class="text-sm text-gray-500">Updates, News</span>
              </span>
              <span>
                • Comments:
                <span class="text-sm text-gray-500">12</span>
              </span>
              <span>
                • Likes:
                <span class="text-sm text-gray-500">34</span>
              </span>
              <span>
                • Shares:
                <span class="text-sm text-gray-500">8</span>
              </span>
              <span>
                • Views:
                <span class="text-sm text-gray-500">256</span>
              </span>
              <span>
                • Edited:
                <span class="text-sm text-gray-500">Yes</span>
              </span>
              <span>
                • Featured:
                <span class="text-sm text-gray-500">No</span>
              </span>
              <span>
                • Status:
                <span class="text-sm text-gray-500">Published</span>
              </span>
              <span>
                • Priority:
                <span class="text-sm text-gray-500">High</span>
              </span>
            </div>
            <div class="my-2">
              <span>
                • Comments Enabled:
                <span class="text-sm text-gray-500">Yes</span>
              </span>
              <span>
                • Visibility:
                <span class="text-sm text-gray-500">Public</span>
              </span>
            </div>
            <div>
              <span>
                • Location:
                <span class="text-sm text-gray-500">Global</span>
              </span>
            </div>
            <div class="flex justify-between items-center">
              <UButton
                variant="solid"
                size="sm"
                class="mt-2 py-2 px-4 bg-teal-500 hover:bg-teal-600 text-white rounded-md"
                >Share</UButton
              >
              <UButton
                variant="outline"
                size="sm"
                class="mt-2 py-2 px-4 rounded-md text-red-300"
                >Validity upto : 27-04-2024</UButton
              >
            </div>
          </NuxtLink>
        </article>

        <article
          class="prose lg:prose-sm col-span-1 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
        >
          <NuxtLink to="/">
            <nuxt-img
              src="/img/megaphone.jpg"
              alt="Announcements Banner"
              width="100%"
              height="100%"
              class="rounded-md mb-1"
            />
            <h3 class="text-xl font-bold text-teal-600 my-2">Announcements</h3>
            <p class="text-lg text-teal-700 truncate my-2">
              Welcome to the announcements page! Stay updated with the latest
              news, events, and important information from our community. Here,
              you'll find all the announcements you need to stay informed and
              connected.
            </p>
            <!-- <div>
            <span class="text-sm text-gray-500">Read more...</span>
          </div> -->
            <div class="my-2">
              <span>
                Posted on
                <time datetime="2024-01-15" class="text-sm text-gray-500"
                  >January 15, 2024</time
                >
              </span>
              <span>
                • by
                <span class="text-sm text-gray-500">Admin</span>
              </span>
              <span> • 5 min read </span>
              <span>
                • Category:
                <span class="text-sm text-gray-500">General</span>
              </span>
              <span>
                • Tags:
                <span class="text-sm text-gray-500">Updates, News</span>
              </span>
              <span>
                • Comments:
                <span class="text-sm text-gray-500">12</span>
              </span>
              <span>
                • Likes:
                <span class="text-sm text-gray-500">34</span>
              </span>
              <span>
                • Shares:
                <span class="text-sm text-gray-500">8</span>
              </span>
              <span>
                • Views:
                <span class="text-sm text-gray-500">256</span>
              </span>
              <span>
                • Edited:
                <span class="text-sm text-gray-500">Yes</span>
              </span>
              <span>
                • Featured:
                <span class="text-sm text-gray-500">No</span>
              </span>
              <span>
                • Status:
                <span class="text-sm text-gray-500">Published</span>
              </span>
              <span>
                • Priority:
                <span class="text-sm text-gray-500">High</span>
              </span>
            </div>
            <div class="my-2">
              <span>
                • Comments Enabled:
                <span class="text-sm text-gray-500">Yes</span>
              </span>
              <span>
                • Visibility:
                <span class="text-sm text-gray-500">Public</span>
              </span>
            </div>
            <div>
              <span>
                • Location:
                <span class="text-sm text-gray-500">Global</span>
              </span>
            </div>
            <div class="flex justify-between items-center">
              <UButton
                variant="solid"
                size="sm"
                class="mt-2 py-2 px-4 bg-teal-500 hover:bg-teal-600 text-white rounded-md"
                >Share</UButton
              >
              <UButton
                variant="outline"
                size="sm"
                class="mt-2 py-2 px-4 rounded-md text-red-300"
                >Validity upto : 27-04-2024</UButton
              >
            </div>
          </NuxtLink>
        </article>
      </div>
    </section>
  </main>
</template>
