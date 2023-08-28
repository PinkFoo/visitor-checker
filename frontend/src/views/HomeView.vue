<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-center text-blue-600 mb-8">Visitors</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <VisitorCard
          v-for="visitor in visitors"
          :key="visitor._id"
          :visitor="visitor"
          class="bg-white rounded-lg shadow-md p-6"
        >
          <blockvisitor class="text-xl italic font-serif mb-4 leading-relaxed">
            <p>{{ visitor.visitor_id }}</p>
          </blockvisitor>
          <footer class="text-right text-gray-700 font-medium">
            - {{ visitor.scrolled }}
            <br />
            - {{ visitor.avatar_src }}
          </footer>
        </VisitorCard>
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');

blockvisitor {
  font-family: 'Merriweather', serif;
  position: relative;
  padding-left: 1.5rem;
}

blockvisitor::before {
  content: open-quote;
  position: absolute;
  left: 0;
  top: -0.25rem;
  font-size: 3rem;
  font-weight: bold;
  color: #e5e7eb;
}
</style>

<script>
import { useVisitorsStore } from '../stores/visitors'
import VisitorCard from '../components/VisitorCard.vue'

export default {
  components: {
    VisitorCard
  },
  async created() {
    const visitorsStore = useVisitorsStore()
    await visitorsStore.fetchVisitors()
  },
  computed: {
    visitors() {
      const visitorsStore = useVisitorsStore()
      return visitorsStore.visitors
    }
  }
}
</script>
