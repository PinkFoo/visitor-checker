<template>
    <h2 class="table-title">Visitor statistics</h2>
  <div class="table">
    <div class="table_cell">Number of users who accesed the page</div>
    <div class="table_cell">Number of users who scrolled to the avatar</div>
    <div class="table_cell">{{ report.visitorsCount }}</div>
    <div class="table_cell">{{ report.percentageScrolled }}%</div>
  </div>
</template>

<script lang="ts">
import { onMounted, computed } from 'vue'
import { useVisitorsStore } from '../stores/visitors'

export default {
  setup(props, { emit }) {
    const visitorsStore = useVisitorsStore()
    const report = computed({
      get() {
        return visitorsStore.visitorReport
      },
      set(val) {
        visitorsStore.visitorReport = val
      }
    })

    const fetchVisitor = async () => {
      await visitorsStore.fetchReport()
    }

    onMounted(fetchVisitor)

    return { report }
  }
}
</script>
