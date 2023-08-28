<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-semibold mb-4">{{ visitor.visitor_id }}</h1>
    <h2 class="text-2xl font-semibold mb-4">- {{ visitor.scrolled }}</h2>
    <div class="flex space-x-4">
      <router-link to="/">Go back</router-link>
      <router-link :to="`/edit/${visitor._id}`" class="text-blue-500 hover:text-blue-700">
        Edit
      </router-link>
      <button @click="deleteCurrentVisitor" class="text-red-500 hover:text-red-700">Delete</button>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue'
import { useVisitorsStore } from '../stores/visitors'
import { useRouter } from 'vue-router'

export default {
  setup(props, { emit }) {
    const visitor = ref({})
    const router = useRouter()
    const visitorsStore = useVisitorsStore()
    const routeId = router.currentRoute.value.params.id

    const fetchVisitor = async () => {
      await visitorsStore.fetchVisitor(routeId)
      visitor.value = visitorsStore.currentVisitor
    }

    const deleteCurrentVisitor = async () => {
      await visitorsStore.deleteVisitor(routeId)
      router.push('/')
    }

    const updateOne = async () => {
      await visitorsStore.updateOneVisitor(routeId)
      router.push('/')
    }

    onMounted(fetchVisitor)

    return { visitor, deleteCurrentVisitor, updateOne }
  }
}
</script>
