<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/layout/Header.vue";
import Sidebar from "./components/layout/Sidebar.vue";
</script>

<template>
  <Header />
  <div class="main-container">
    <Sidebar />
    <section class="p-5 flex-1">
      <RouterView />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
}
</style>
