<script setup lang="ts">
definePageMeta({ layout: "custom" });
</script>

<template>
  <main class="container mx-auto px-4 py-6 grid grid-cols-2 gap-8">
    <section>
      <div class="flex flex-col gap-y-4">
        <nuxt-img
          src="/img/megaphone.jpg"
          alt="Notifications Banner"
          class="rounded-lg shadow-md mb-6 mx-auto"
        />
        <h2 class="text-2xl font-bold text-teal-600">Hackathan 2024</h2>
        <p class="text-gray-700 leading-relaxed text-justify">
          Join us for an exciting Hackathon event where innovation meets
          creativity! Collaborate with like-minded individuals, showcase your
          skills, and bring your ideas to life. Whether you're a seasoned
          developer or a beginner, there's a place for you here. Don't miss out
          on this opportunity to network, learn, and have fun! Register now and
          be part of an unforgettable experience! Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Repellat vel qui exercitationem et
          possimus. Aliquam, repudiandae. Consectetur illo nihil iusto eum
          distinctio fuga architecto, autem, labore doloremque, quam magnam
          voluptatum.
        </p>
        <p class="text-gray-700 leading-relaxed text-justify">
          Whether you're a seasoned developer or a beginner, there's a place for
          you here. Don't miss out on this opportunity to network, learn, and
          have fun! Register now and be part of an unforgettable experience!
          <button>
            <NuxtLink to="/createAnnouncement" class="text-teal-600 underline"
              >Register Here</NuxtLink
            >
          </button>
        </p>

        <span class="font-semibold text-teal-600">Important Details:</span>
        <span> Theme: "Innovating for a Better Tomorrow" </span>
        <div class="text-gray-700 leading-relaxed text-justify">
          Date: July 15-17, 2024<br />
          Location: Tech Hub, Downtown City<br />
          Registration Deadline: July 1, 2024
        </div>
        <p class="text-gray-700 leading-relaxed text-justify">
          For more information and to register, visit our website or contact us
          at
        </p>
        <a href="mailto:info@hackathon2024.com" class="text-teal-600 underline">
          info@hackathon2024.com
        </a>
        <span>
          We look forward to seeing you at Hackathon 2024! Let's code the future
          together!
        </span>
        <p>
          Best regards,<br />
          The Hackathon 2024 Team
        </p>
        <p>
          <strong>Note:</strong> This is a fictional announcement created for
          demonstration purposes.
        </p>
        <p>Posted on: June 10, 2024 by Admin</p>
      </div>
      <p>
        <NuxtLink to="/announcements" class="text-teal-500 underline"
          >Back to Announcements</NuxtLink
        >
      </p>

      <div>
        <h2 class="text-xl font-semibold text-teal-800 mt-8 mb-4">
          Recent Comments
        </h2>

        <input
          type="text"
          placeholder="Add a comment..."
          class="w-full p-2 border border-gray-300 rounded-md mb-4"
        />

        <div class="space-y-4">
          <div class="border border-gray-200 rounded-lg p-4">
            <div class="flex items-start gap-3 mb-2">
              <div
                class="shrink-0 h-10 w-10 rounded-full flex items-center justify-center bg-teal-500 text-white font-semibold text-sm"
              >
                A
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="text-sm font-semibold text-gray-800">Alice</h3>
                <div class="text-xs text-gray-400 mt-1">
                  July 12, 2024 at 10:15 AM
                </div>
              </div>
            </div>
            <p class="text-gray-700">
              This is a great announcement! Looking forward to more updates.
            </p>
          </div>
        </div>

        <div>
          <div class="border border-gray-200 rounded-lg p-4">
            <div class="flex items-start gap-3 mb-2">
              <div
                class="shrink-0 h-10 w-10 rounded-full flex items-center justify-center bg-teal-500 text-white font-semibold text-sm"
              >
                B
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="text-sm font-semibold text-gray-800">Bob</h3>
                <div class="text-xs text-gray-400 mt-1">
                  July 12, 2024 at 11:30 AM
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button
            class="mt-4 w-full px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-md"
          >
            Load More Comments
          </button>
        </div>
      </div>
    </section>
    <section>
      <h2 class="text-xl font-semibold text-teal-800">
        Details of this announcement
      </h2>
      <div class="mt-4">
        <div class="shadow rounded-lg p-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">
            Announcement Statistics
          </h3>
          <div class="grid grid-cols-1 gap-4">
            <div class="flex items-center justify-between">
              <span class="text-gray-700">Posted on:</span>
              <span class="font-semibold text-gray-900">January 15, 2024</span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-gray-700">Posted by:</span>
              <span class="font-semibold text-gray-900">Admin</span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-gray-700">Read time:</span>
              <span class="font-semibold text-gray-900">5 min read</span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-gray-700">Category:</span>
              <span class="font-semibold text-gray-900">General</span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-gray-700">Tags:</span>
              <span class="font-semibold text-gray-900">Updates, News</span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-gray-700">Comments:</span>
              <span class="font-semibold text-gray-900">12</span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-gray-700">Likes:</span>
              <span class="font-semibold text-gray-900">34</span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-gray-700">Edited:</span>
              <span class="font-semibold text-gray-900">Yes</span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-gray-700">Featured:</span>
              <span class="font-semibold text-gray-900">No</span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-gray-700">Status:</span>
              <span class="font-semibold text-gray-900">Published</span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-gray-700">Priority:</span>
              <span class="font-semibold text-gray-900">High</span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-gray-700">Comments Enabled:</span>
              <span class="font-semibold text-gray-900">Yes</span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-gray-700">Visibility:</span>
              <span class="font-semibold text-gray-900">Public</span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-gray-700">Allow Sharing:</span>
              <span class="font-semibold text-gray-900">Yes</span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-gray-700">Published Location:</span>
              <span class="font-semibold text-gray-900">India</span>
            </div>
          </div>

          <h3 class="text-lg font-semibold text-gray-800 mt-6 mb-4">
            Engagement Metrics
          </h3>

          <div class="grid grid-cols-1 gap-4">
            <div class="flex items-center justify-between">
              <span class="text-gray-700">Total Views:</span>
              <span class="font-semibold text-gray-900">1,250</span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-gray-700">Total Clicks:</span>
              <span class="font-semibold text-gray-900">320</span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-gray-700">Engagement Rate:</span>
              <span class="font-semibold text-gray-900">25.6%</span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-gray-700">Shares:</span>
              <span class="font-semibold text-gray-900">75</span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-gray-700">Comments:</span>
              <span class="font-semibold text-gray-900">45</span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-gray-700">Average Time Spent:</span>
              <span class="font-semibold text-gray-900">3 mins 45 secs</span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-gray-700">Bounce Rate:</span>
              <span class="font-semibold text-gray-900">18.2%</span>
            </div>

            <div class="flex items-center justify-between">
              <span class="text-gray-700">New vs Returning Users:</span>
              <span class="font-semibold text-gray-900"
                >New: 70%, Returning: 30%</span
              >
            </div>
          </div>

          <h3 class="text-lg font-semibold text-gray-800 mt-6 mb-4">
            User Demographics
          </h3>
          <div class="grid grid-cols-1 gap-4">
            <div class="flex items-center justify-between">
              <span class="text-gray-700">Top Locations:</span>
              <span class="font-semibold text-gray-900"
                >New York, San Francisco, London</span
              >
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-700">Age Groups:</span>
              <span class="font-semibold text-gray-900"
                >18-24: 30%, 25-34: 45%, 35-44: 15%, 45+: 10%</span
              >
            </div>
            <div>
              <div class="flex items-center justify-between">
                <span class="text-gray-700">Gender Distribution:</span>
                <span class="font-semibold text-gray-900"
                  >Male: 55%, Female: 45%</span
                >
              </div>
            </div>
          </div>

          <h3 class="text-lg font-semibold text-gray-800 mt-6 mb-4">
            Device Usage
          </h3>
          <div class="grid grid-cols-1 gap-4">
            <div class="flex items-center justify-between">
              <span class="text-gray-700">Desktop:</span>
              <span class="font-semibold text-gray-900">60%</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-700">Mobile:</span>
              <span class="font-semibold text-gray-900">40%</span>
            </div>
            <div>
              <div class="flex items-center justify-between">
                <span class="text-gray-700">Laptop:</span>
                <span class="font-semibold text-gray-900">30%</span>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-700">Tablet:</span>
              <span class="font-semibold text-gray-900">10%</span>
            </div>

            <div>
              <button
                class="w-full px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-md"
              >
                Export Statistics
              </button>
            </div>

            <div>
              <button
                class="w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md"
              >
                View Raw Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
