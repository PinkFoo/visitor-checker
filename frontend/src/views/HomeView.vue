<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="container mx-auto px-4 py-8">
      <LoremParagraphs v-for="i in 10" :key="i" class="lorem-paragraph mb-3"></LoremParagraphs>
      <div class="grid">
        <VisitorCard v-if="visitor" :visitor="visitor" class="visitor-card"></VisitorCard>
      </div>
      <LoremParagraphs v-for="i in 10" :key="i" class="lorem-paragraph mb-3"></LoremParagraphs>
    </div>
  </div>
</template>

<style>
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

<script lang="ts">
import { useVisitorsStore } from '../stores/visitors'
import VisitorCard from '../components/VisitorCard.vue'
import LoremParagraphs from '../components/LoremParagraphs.vue'

export default {
  components: {
    VisitorCard,
    LoremParagraphs
  },
  async created() {
    const visitorsStore = useVisitorsStore()
    const visitorIdKey = 'visitorId'
    const scrolledKey = 'scrolled'

    const visitorId = sessionStorage.getItem(visitorIdKey)
    const scrolled = sessionStorage.getItem(scrolledKey)

    if (visitorId) {
      await visitorsStore.fetchVisitor(visitorId)
    } else {
      await visitorsStore.addNewVisitor()
      const visitor = await visitorsStore.currentVisitor
      if (visitor) {
        sessionStorage.setItem(visitorIdKey, visitor.visitorId)
        sessionStorage.setItem(scrolledKey, String(visitor.scrolled)) // Convert boolean to string
      }
    }

    if (!scrolled || scrolled === 'false') {
      const observer = new IntersectionObserver(
        function (entries) {
          if (entries[0].isIntersecting === true) {
            const visitor = visitorsStore.currentVisitor
            if (visitor) {
              visitor.scrolled = true
              visitorsStore.updateVisitor(visitor)
              sessionStorage.setItem(scrolledKey, String(visitor.scrolled))
            }
            observer.unobserve(entries[0].target)
          }
        },
        { threshold: [0] }
      )
      const element = document.querySelector('#visitor-avatar')
      if (element) {
        observer.observe(element)
      }
    }
  },
  computed: {
    visitor() {
      const visitorsStore = useVisitorsStore()
      return visitorsStore.currentVisitor
    }
  }
}
</script>
