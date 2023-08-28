<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-semibold mb-4">Add a new visitor</h1>
    <form @submit.prevent="submitVisitor" class="bg-white rounded-lg shadow-md p-6">
      <div class="mb-4">
        <label for="visitor_id" class="block text-gray-700 font-medium">Visitor_id:</label>
        <input
          v-model="visitor_id"
          type="text"
          id="visitor_id"
          class="block w-full mt-1 bg-gray-100 border border-gray-300 rounded p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
        />
      </div>
      <div class="mb-4">
        <label for="scrolled" class="block text-gray-700 font-medium">Scrolled:</label>
        <input
          v-model="scrolled"
          type="checkbox"
          id="scrolled"
          class="block w-full mt-1 bg-gray-100 border border-gray-300 rounded p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
        />
      </div>
      <div class="mb-4">
        <label for="avatar_src" class="block text-gray-700 font-medium">Avatar_src:</label>
        <input
          v-model="avatar_src"
          type="text"
          id="avatar_src"
          class="block w-full mt-1 bg-gray-100 border border-gray-300 rounded p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
        />
      </div>
      <button
        type="submit"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { useVisitorsStore } from '../stores/visitors'

export default {
  data() {
    return {
      visitor_id: '',
      scrolled: '',
      avatar_src: ''
    }
  },
  methods: {
    async submitVisitor() {
      const visitorsStore = useVisitorsStore()
      await visitorsStore.addVisitor({
        visitor_id: this.visitor_id,
        scrolled: this.scrolled,
        avatar_src: this.avatar_src
      })
      this.$router.push('/')
    }
  }
}
</script>
