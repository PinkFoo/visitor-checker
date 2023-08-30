<template>
  <div class="rounded p-4">
    <img v-bind:src="visitor.avatar_src" id="visitor-avatar" />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    visitor: {
      type: Object,
      required: true
    }
  }
}
</script>
