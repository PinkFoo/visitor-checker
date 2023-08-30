<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <header class="bg-white shadow py-4 px-6 flex justify-between items-center">
      <h1 class="text-2xl font-semibold text-blue-600">Visitor checker app</h1>
      <nav class="flex space-x-4">
        <router-link to="/" class="text-blue-600 hover:text-blue-800 font-medium text-lg">
          Home
        </router-link>
        <router-link to="/report" class="text-blue-600 hover:text-blue-800 font-medium text-lg">
          Report
        </router-link>
      </nav>
    </header>
    <main class="flex-grow">
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App'
}
</script>
