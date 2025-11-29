<script setup lang="ts">
import { ref } from "vue";

definePageMeta({ layout: "custom" });

const formData = ref({
  title: "",
  excerpt: "",
  body: "",
  date: "",
  author: "",
  reading: "",
  validity: "",
  category: "",
  tags: "",
});

const photo = ref<File | null>(null);
const photoPreview = ref<string>("");
const isSubmitting = ref(false);
const fileInputRef = ref<HTMLInputElement>();

const onPhotoSelected = (event: Event): void => {
  const target = event.target as HTMLInputElement;
  if (!target.files?.[0]) return;

  const file = target.files[0];
  photo.value = file;

  const reader = new FileReader();
  reader.onload = (e) => {
    photoPreview.value = (e.target?.result as string) || "";
  };
  reader.readAsDataURL(file);
};

const removePhoto = (): void => {
  photo.value = null;
  photoPreview.value = "";
  if (fileInputRef.value) {
    fileInputRef.value.value = "";
  }
};

const submitForm = async (): Promise<void> => {
  isSubmitting.value = true;
  try {
    const submitData = new FormData();

    Object.entries(formData.value).forEach(([key, value]) => {
      submitData.append(key, value as string);
    });

    if (photo.value) {
      submitData.append("photo", photo.value);
    }

    const response = await fetch("/api/announcements", {
      method: "POST",
      body: submitData,
    });

    if (response.ok) {
      formData.value = {
        title: "",
        excerpt: "",
        body: "",
        date: "",
        author: "",
        reading: "",
        validity: "",
        category: "",
        tags: "",
      };
      removePhoto();
      await navigateTo("/announcements");
    } else {
      alert("Error creating announcement");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Error creating announcement");
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <main class="min-h-screen">
    <section class="container mx-auto px-4 py-10">
      <div class="max-w-3xl mx-auto">
        <div class="bg-white/50 rounded-lg shadow-lg p-8">
          <h1 class="text-3xl font-bold text-teal-600 mb-2">
            Create Announcement
          </h1>
          <p class="text-gray-600 mb-8">
            Fill in the details below to create a new announcement
          </p>

          <form class="space-y-6" @submit.prevent="submitForm">
            <!-- Photo Upload -->
            <div>
              <label
                for="photo"
                class="block text-sm font-semibold text-gray-700 mb-2"
              >
                Photo
              </label>

              <!-- Photo Preview -->
              <div
                v-if="photoPreview"
                class="mb-4 relative rounded-lg overflow-hidden bg-gray-100 max-w-sm"
              >
                <img
                  :src="photoPreview"
                  alt="Preview"
                  class="w-full h-48 object-cover"
                />
                <button
                  type="button"
                  title="Remove photo"
                  class="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-colors"
                  @click="removePhoto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <!-- Upload Area -->
              <div
                v-if="!photoPreview"
                class="flex items-center justify-center w-full"
              >
                <label
                  for="photo"
                  class="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-teal-300 rounded-lg cursor-pointer bg-teal-50 hover:bg-teal-100 transition-colors"
                >
                  <div
                    class="flex flex-col items-center justify-center pt-5 pb-6"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-8 w-8 text-teal-500 mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    <p class="text-sm text-teal-600 font-medium">
                      Click to upload photo
                    </p>
                    <p class="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                  <input
                    id="photo"
                    ref="fileInputRef"
                    type="file"
                    accept="image/*"
                    class="hidden"
                    @change="onPhotoSelected"
                  />
                </label>
              </div>
            </div>

            <!-- Title -->
            <div>
              <label
                for="title"
                class="block text-sm font-semibold text-gray-700 mb-2"
              >
                Title <span class="text-red-500">*</span>
              </label>
              <input
                id="title"
                v-model="formData.title"
                type="text"
                placeholder="Enter announcement title"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
              />
            </div>

            <!-- Excerpt -->
            <div>
              <label
                for="excerpt"
                class="block text-sm font-semibold text-gray-700 mb-2"
              >
                Excerpt <span class="text-red-500">*</span>
              </label>
              <textarea
                id="excerpt"
                v-model="formData.excerpt"
                rows="2"
                placeholder="Brief summary of the announcement"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition resize-none"
              />
            </div>

            <!-- Body / Content -->
            <div>
              <label
                for="body"
                class="block text-sm font-semibold text-gray-700 mb-2"
              >
                Body / Content <span class="text-red-500">*</span>
              </label>
              <textarea
                id="body"
                v-model="formData.body"
                rows="6"
                placeholder="Full content of the announcement"
                required
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition resize-none"
              />
            </div>

            <!-- Date and Author Row -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  for="date"
                  class="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Date <span class="text-red-500">*</span>
                </label>
                <input
                  id="date"
                  v-model="formData.date"
                  type="date"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                />
              </div>

              <div>
                <label
                  for="author"
                  class="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Author <span class="text-red-500">*</span>
                </label>
                <input
                  id="author"
                  v-model="formData.author"
                  type="text"
                  placeholder="Enter author name"
                  required
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                />
              </div>
            </div>

            <!-- Reading Time and Validity Row -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  for="reading"
                  class="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Reading Time
                </label>
                <input
                  id="reading"
                  v-model="formData.reading"
                  type="text"
                  placeholder="e.g., 5 min read"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                />
              </div>

              <div>
                <label
                  for="validity"
                  class="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Validity Until
                </label>
                <input
                  id="validity"
                  v-model="formData.validity"
                  type="date"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                />
              </div>
            </div>

            <!-- Category and Tags Row -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  for="category"
                  class="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Category
                </label>
                <select
                  id="category"
                  v-model="formData.category"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition bg-white"
                >
                  <option value="">Select a category</option>
                  <option value="General">General</option>
                  <option value="Updates">Updates</option>
                  <option value="Events">Events</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="News">News</option>
                  <option value="Features">Features</option>
                </select>
              </div>

              <div>
                <label
                  for="tags"
                  class="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Tags
                  <span class="text-gray-500 text-xs">(comma-separated)</span>
                </label>
                <input
                  id="tags"
                  v-model="formData.tags"
                  type="text"
                  placeholder="e.g., Updates, News, Important"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition"
                />
              </div>
            </div>

            <!-- Form Actions -->
            <div class="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="flex-1 px-6 py-3 bg-teal-500 hover:bg-teal-600 disabled:bg-teal-300 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                {{ isSubmitting ? "Creating..." : "Create Announcement" }}
              </button>

              <button
                type="button"
                class="flex-1 px-6 py-3 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded-lg transition-colors duration-200"
                @click="$router.back()"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>
