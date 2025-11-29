<script setup lang="ts">
definePageMeta({
  layout: "default",
});
</script>
<template>
  <main>
    <section
      class="container mx-auto flex flex-col md:flex-row items-center justify-center mt-20"
    >
      <div class="md:w-1/2 p-4">
        <h2 class="text-4xl font-bold text-teal-600 mb-4">
          Make your announcements with megaPh. Connect with Community forever.
        </h2>
        <p class="text-teal-700 text-lg">
          Your ultimate platform to connect, share, and explore a vibrant
          community. Join us today and be part of something amazing!
        </p>

        <input
          type="text"
          placeholder="Search announcements here"
          class="mt-4 p-3 w-full border border-teal-300 rounded-md"
        />
      </div>
      <div class="md:w-1/2 p-4">
        <nuxt-img
          src="/img/megaphone.jpg"
          alt="Hero Image"
          class="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
    <section>
      <div class="container mx-auto mt-20 p-4 text-center">
        <h3 class="text-3xl font-semibold text-teal-600 mb-6">
          Join megaPh. Today!
        </h3>
        <nuxt-link
          to="/announcements"
          class="px-6 py-3 bg-teal-500 text-white text-xl rounded-md hover:bg-teal-600"
          >Get Started</nuxt-link
        >
      </div>
    </section>

    <section>
      <div class="container mx-auto mt-20 p-4">
        <h3 class="text-3xl font-semibold text-teal-600 mb-6 text-center">
          Features of megaPh.
        </h3>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
            <h4 class="text-2xl font-bold text-teal-600 mb-4">
              Create Announcements
            </h4>
            <p class="text-teal-700">
              Easily create and customize your announcements to reach your
              audience effectively.
            </p>
          </div>
          <div class="bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
            <h4 class="text-2xl font-bold text-teal-600 mb-4">
              Connect with Community
            </h4>
            <p class="text-teal-700">
              Engage with a vibrant community, share your thoughts, and get
              feedback.
            </p>
          </div>
          <div class="bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
            <h4 class="text-2xl font-bold text-teal-600 mb-4">
              Explore Announcements
            </h4>
            <p class="text-teal-700">
              Discover announcements from others and stay updated with the
              latest news.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container mx-auto mt-20 p-4 text-center">
        <h3 class="text-3xl font-semibold text-teal-600 mb-6">How It Works</h3>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
            <h4 class="text-2xl font-bold text-teal-600 mb-4">Sign Up</h4>
            <p class="text-teal-700">
              Create your free account to get started with megaPh.
            </p>
          </div>
          <div class="bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
            <h4 class="text-2xl font-bold text-teal-600 mb-4">Create</h4>
            <p class="text-teal-700">
              Craft your announcements using our easy-to-use tools.
            </p>
          </div>
          <div class="bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
            <h4 class="text-2xl font-bold text-teal-600 mb-4">Share</h4>
            <p class="text-teal-700">
              Share your announcements with the community and get feedback.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container mx-auto mt-20 p-4 text-center">
        <h3 class="text-3xl font-semibold text-teal-600 mb-6">Testimonials</h3>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
            <p class="text-teal-700 italic">
              "megaPh. has transformed the way I connect with my community.
              Highly recommended!"
            </p>
            <h4 class="text-teal-600 font-bold mt-4">- Alex J.</h4>
          </div>
          <div class="bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
            <p class="text-teal-700 italic">
              "Creating announcements has never been easier. megaPh. is a game
              changer!"
            </p>
            <h4 class="text-teal-600 font-bold mt-4">- Maria S.</h4>
          </div>
          <div class="bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
            <p class="text-teal-700 italic">
              "I love the community aspect of megaPh. It's a fantastic platform
              to share and explore."
            </p>
            <h4 class="text-teal-600 font-bold mt-4">- David L.</h4>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container mx-auto mt-20 p-4 text-center">
        <h3 class="text-3xl font-semibold text-teal-600 mb-6">Get Started</h3>
        <nuxt-link
          to="/announcements"
          class="px-6 py-3 bg-teal-500 text-white text-xl rounded-md hover:bg-teal-600"
          >Sign Up Now</nuxt-link
        >
      </div>
    </section>

    <section>
      <div class="container mx-auto mt-20 p-4 text-center">
        <h3 class="text-3xl font-semibold text-teal-600 mb-6">
          Frequently Asked Questions
        </h3>
        <div class="text-left max-w-3xl mx-auto">
          <div class="mb-6">
            <h4 class="text-2xl font-bold text-teal-600 mb-2">
              What is megaPh.?
            </h4>
            <p class="text-teal-700">
              megaPh. is a platform that allows users to create, share, and
              explore announcements within a vibrant community.
            </p>
          </div>
          <div class="mb-6">
            <h4 class="text-2xl font-bold text-teal-600 mb-2">
              How do I create an announcement?
            </h4>
            <p class="text-teal-700">
              Simply sign in to your account, navigate to the announcement
              creation page, and follow the prompts to craft your message.
            </p>
          </div>
          <div class="mb-6">
            <h4 class="text-2xl font-bold text-teal-600 mb-2">
              Is megaPh. free to use?
            </h4>
            <p class="text-teal-700">
              Yes, megaPh. offers a free tier with essential features. We also
              have premium plans for advanced functionalities.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container mx-auto mt-20 p-4 text-center">
        <h3 class="text-3xl font-semibold text-teal-600 mb-6">Stay Updated</h3>
        <p class="text-teal-700 mb-4">
          Subscribe to our newsletter to receive the latest news and updates
          from megaPh.
        </p>
        <form class="max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            class="w-full p-3 rounded-md border border-teal-300 mb-4"
          />
          <button
            type="submit"
            class="w-full px-6 py-3 bg-teal-500 text-white text-xl rounded-md hover:bg-teal-600"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>

    <section>
      <div class="container mx-auto mt-20 p-4">
        <h3 class="text-3xl font-semibold text-teal-600 mb-6 text-center">
          Why Choose megaPh.?
        </h3>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
            <h4 class="text-2xl font-bold text-teal-600 mb-4">
              Community Focused
            </h4>
            <p class="text-teal-700">
              Connect with like-minded individuals and share your announcements
              with a supportive community.
            </p>
          </div>
          <div class="bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
            <h4 class="text-2xl font-bold text-teal-600 mb-4">Easy to Use</h4>
            <p class="text-teal-700">
              Our user-friendly interface makes it simple to create and manage
              your announcements.
            </p>
          </div>
          <div class="bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
            <h4 class="text-2xl font-bold text-teal-600 mb-4">Secure</h4>
            <p class="text-teal-700">
              We prioritize your privacy and security, ensuring your data is
              protected.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container mx-auto mt-20 p-4 text-center">
        <h3 class="text-3xl font-semibold text-teal-600 mb-6">
          Latest Blog Posts
        </h3>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
            <h4 class="text-2xl font-bold text-teal-600 mb-4">
              5 Tips for Effective Announcements
            </h4>
            <p class="text-teal-700">
              Learn how to craft announcements that capture attention and drive
              engagement.
            </p>
          </div>
          <div class="bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
            <h4 class="text-2xl font-bold text-teal-600 mb-4">
              Building a Strong Community
            </h4>
            <p class="text-teal-700">
              Discover strategies for fostering a vibrant and supportive
              community on megaPh.
            </p>
          </div>
          <div class="bg-white bg-opacity-70 p-6 rounded-lg shadow-md">
            <h4 class="text-2xl font-bold text-teal-600 mb-4">
              Maximizing Your Reach
            </h4>
            <p class="text-teal-700">
              Tips and tricks for expanding the reach of your announcements.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container mx-auto mt-20 p-4 text-center">
        <h3 class="text-3xl font-semibold text-teal-600 mb-6">Our Mission</h3>
        <p class="text-teal-700 max-w-3xl mx-auto">
          At megaPh., our mission is to empower individuals to connect,
          communicate, and share their announcements with a global community. We
          believe in the power of communication to bring people together and
          create meaningful connections.
        </p>
      </div>
    </section>
    <section>
      <div class="container mx-auto mt-20 p-4 text-center">
        <h3 class="text-3xl font-semibold text-teal-600 mb-6">Contact Us</h3>
        <p class="text-teal-700 mb-4">
          Have questions or need support? Reach out to our team, and we'll be
          happy to assist you.
        </p>
        <form class="max-w-md mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            class="w-full p-3 rounded-md border border-teal-300 mb-4"
          />
          <input
            type="email"
            placeholder="Your Email"
            class="w-full p-3 rounded-md border border-teal-300 mb-4"
          />
          <textarea
            placeholder="Your Message"
            class="w-full p-3 rounded-md border border-teal-300 mb-4"
            rows="4"
          ></textarea>
          <button
            type="submit"
            class="w-full px-6 py-3 bg-teal-500 text-white text-xl rounded-md hover:bg-teal-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>

    <section>
      <div class="container mx-auto mt-20 p-4 text-center">
        <h3 class="text-3xl font-semibold text-teal-600 mb-6">
          Ready to Announce?
        </h3>
        <nuxt-link
          to="/announcements"
          class="px-6 py-3 bg-teal-500 text-white text-xl rounded-md hover:bg-teal-600"
          >Sign In Now</nuxt-link
        >
      </div>
    </section>
    <section>
      <div class="container mx-auto mt-20 p-4 text-center">
        <p class="text-teal-700">&copy; 2024 megaPh. All rights reserved.</p>
      </div>
    </section>
  </main>
</template>
