<script setup lang="ts">
definePageMeta({ layout: "custom" });
</script>

<template>
  <main
    class="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"
  >
    <section>
      <div class="flex flex-col gap-y-4 order-2 md:order-1">
        <nuxt-img
          src="/img/megaphone.jpg"
          alt="Notifications Banner"
          class="rounded-lg shadow-md mb-6 mx-auto w-full md:w-auto"
        />
        <h2 class="text-xl sm:text-2xl font-bold text-teal-600">
          Hackathan 2024
        </h2>
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
        <h2
          class="text-lg sm:text-xl font-semibold text-teal-800 mt-6 sm:mt-8 mb-4"
        >
          Help & Support
        </h2>
        <p class="text-gray-700 leading-relaxed">
          If you need assistance, please visit our
          <NuxtLink to="/help-center" class="text-teal-600 underline"
            >Help Center</NuxtLink
          >
          or contact our support team at
        </p>
        <a href="mailto: support@hackathoninc.com">support@hackathoninc.com</a>
      </div>

      <div>
        <h2
          class="text-lg sm:text-xl font-semibold text-teal-800 mt-6 sm:mt-8 mb-4"
        >
          Recent Comments
        </h2>

        <input
          type="text"
          placeholder="Add a comment..."
          class="w-full p-2 border border-gray-300 rounded-md mb-4 text-sm sm:text-base"
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
            <p class="text-sm sm:text-base text-gray-700">
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
            class="mt-4 w-full px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-md text-sm sm:text-base"
          >
            Load More Comments
          </button>
        </div>
      </div>
    </section>
    <section class="order-1 md:order-2">
      <h2 class="text-lg sm:text-xl font-semibold text-teal-800">
        Details of this announcement
      </h2>
      <div class="mt-4">
        <div class="shadow rounded-lg p-4 sm:p-6">
          <h3 class="text-base sm:text-lg font-semibold text-gray-800 mb-4">
            Announcement Metrics
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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

          <h3
            class="text-base sm:text-lg font-semibold text-gray-800 mt-6 mb-4"
          >
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
              <span class="text-gray-700">Likes:</span>
              <span class="font-semibold text-gray-900">34</span>
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

          <h3
            class="text-base sm:text-lg font-semibold text-gray-800 mt-6 mb-4"
          >
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

          <h3
            class="text-base sm:text-lg font-semibold text-gray-800 mt-6 mb-4"
          >
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
                class="w-full px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-md text-sm sm:text-base"
              >
                Export Statistics
              </button>
            </div>

            <div>
              <button
                class="w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md text-sm sm:text-base"
              >
                View Raw Data
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2
          class="text-lg sm:text-xl font-semibold text-teal-800 mt-6 sm:mt-8 mb-4"
        >
          Share this Announcement
        </h2>
        <div class="flex items-center gap-4">
          <button
            class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm sm:text-base"
          >
            Share on Facebook
          </button>
          <button
            class="px-4 py-2 bg-blue-400 hover:bg-blue-500 text-white rounded-md text-sm sm:text-base"
          >
            Share on X
          </button>
          <button
            class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm sm:text-base"
          >
            Share on LinkedIn
          </button>
          <button
            class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md text-sm sm:text-base"
          >
            Whatsapp
          </button>
        </div>
      </div>

      <!-- <div>
        <h2
          class="text-lg sm:text-xl font-semibold text-teal-800 mt-6 sm:mt-8 mb-4"
        >
          Related Announcements
        </h2>
        <ul class="space-y-3">
          <li>
            <NuxtLink to="/announcement/1" class="text-teal-600 underline"
              >Announcement Title 1</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/announcement/2" class="text-teal-600 underline"
              >Announcement Title 2</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/announcement/3" class="text-teal-600 underline"
              >Announcement Title 3</NuxtLink
            >
          </li>
        </ul>
      </div> -->

      <!-- <div>
        <h2
          class="text-lg sm:text-xl font-semibold text-teal-800 mt-6 sm:mt-8 mb-4"
        >
          Contact Information
        </h2>
        <p class="text-gray-700 leading-relaxed">
          For any inquiries regarding this announcement, please contact us at:
        </p>
        <a href="mailto:contact@example.com" class="text-teal-600 underline"
          >contact@example.com</a
        >
      </div> -->

      <!-- <div>
        <h2
          class="text-lg sm:text-xl font-semibold text-teal-800 mt-6 sm:mt-8 mb-4"
        >
          Tags
        </h2>
        <div class="flex flex-wrap gap-2">
          <span
            class="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm sm:text-base"
            >Updates</span
          >
          <span
            class="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm sm:text-base"
            >News</span
          >
          <span
            class="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm sm:text-base"
            >Events</span
          >
        </div>
      </div> -->

      <div>
        <h2
          class="text-lg sm:text-xl font-semibold text-teal-800 mt-6 sm:mt-8 mb-4"
        >
          Report Issue
        </h2>
        <button
          class="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md text-sm sm:text-base"
        >
          Report an Issue
        </button>
      </div>

      <!-- <div>
        <h2
          class="text-lg sm:text-xl font-semibold text-teal-800 mt-6 sm:mt-8 mb-4"
        >
          Legal Information
        </h2>
        <p class="text-gray-700 leading-relaxed">
          © 2024 Hackathon Inc. All rights reserved. Please read our
          <NuxtLink to="/privacy-policy" class="text-teal-600 underline"
            >Privacy Policy</NuxtLink
          >
          and
          <NuxtLink to="/terms-of-service" class="text-teal-600 underline"
            >Terms of Service</NuxtLink
          >
          for more information.
        </p>
      </div> -->

      <!-- <div>
        <h2
          class="text-lg sm:text-xl font-semibold text-teal-800 mt-6 sm:mt-8 mb-4"
        >
          Community Guidelines
        </h2>
        <p class="text-gray-700 leading-relaxed">
          Please adhere to our community guidelines when engaging with this
          announcement and its comments section. Be respectful, stay on topic,
          and avoid any inappropriate language or behavior.
        </p>
      </div> -->

      <!-- <div>
        <h2
          class="text-lg sm:text-xl font-semibold text-teal-800 mt-6 sm:mt-8 mb-4"
        >
          Language Options
        </h2>
        <select
          class="w-full p-2 border border-gray-300 rounded-md mb-4 text-sm sm:text-base"
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>
      </div> -->

      <!-- <div>
        <h2
          class="text-lg sm:text-xl font-semibold text-teal-800 mt-6 sm:mt-8 mb-4"
        >
          Notification Settings
        </h2>
        <p class="text-gray-700 leading-relaxed">
          Manage your notification preferences for this announcement.
        </p>
        <div class="flex items-center gap-4 mt-2">
          <label class="flex items-center gap-2">
            <input type="checkbox" class="h-4 w-4" checked />
            Email Notifications
          </label>
          <label class="flex items-center gap-2">
            <input type="checkbox" class="h-4 w-4" checked />
            SMS Notifications
          </label>
        </div>
      </div> -->
    </section>
  </main>
</template>
