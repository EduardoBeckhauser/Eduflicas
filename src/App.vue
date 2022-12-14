<script setup>
import HeaderComp from "@/components/HeaderComp.vue";
</script>
<template>
  <header>
    <HeaderComp />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  background-color: black;
}
</style>
