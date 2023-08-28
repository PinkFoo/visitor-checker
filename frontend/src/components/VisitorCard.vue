<template>
  <div class="bg-white shadow rounded p-4">
    <div class="text-lg font-semibold mb-2">{{ visitor.visitor_id }}</div>
    <div class="text-sm text-gray-500">- {{ visitor.scrolled }}</div>
    <div class="text-sm text-gray-500">- {{ visitor.avatar_src }}</div>
    <div class="mt-4">
      <router-link :to="`/visitor/${visitor._id}`" class="text-blue-500 hover:text-blue-700">
        View Details
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visitor: {
      type: Object,
      required: true
    }
  }
}
</script>
