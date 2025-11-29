<template>
  <div
    class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[url(/img/bg-38.jpg)] bg-cover bg-center"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-teal-600">
          Sign in to your account
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or
          <NuxtLink
            to="/signup"
            class="font-medium text-teal-600 hover:text-teal-700"
            >create a new account</NuxtLink
          >
        </p>
      </div>

      <div class="flex flex-col space-y-3">
        <button
          type="button"
          class="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 gap-x-2"
        >
          <svg
            class="w-5 h-5 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M21.35 11.1h-9.2v2.8h5.3c-.23 1.4-1.21 2.6-2.58 3.4v2.8h4.18c2.45-2.25 3.86-5.58 3.86-9.58 0-.64-.06-1.27-.13-1.88z"
              fill="#4285F4"
            />
            <path
              d="M12.15 21c2.7 0 4.96-.9 6.62-2.44l-4.18-2.8c-1.16.78-2.64 1.24-4.44 1.24-3.41 0-6.3-2.3-7.33-5.41H1.38v2.7C3.03 18.9 7.36 21 12.15 21z"
              fill="#34A853"
            />
            <path
              d="M4.82 12.39a7.54 7.54 0 010-2.6V7.1H1.38a11.98 11.98 0 000 9.8l3.44-2.51z"
              fill="#FBBC05"
            />
            <path
              d="M12.15 6.5c1.47 0 2.79.5 3.84 1.48l2.87-2.87C16.96 2.9 14.7 2 12.15 2 7.36 2 3.03 4.1 1.38 7.1l3.44 2.69c1.03-3.11 3.92-5.29 7.33-5.29z"
              fill="#EA4335"
            />
          </svg>
          Continue with Google
        </button>
      </div>
      <USeparator label="Or" class="text-teal-600" />
      <form class="mt-6 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: false,
});
</script>
