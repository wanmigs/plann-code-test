<script setup lang="ts">
import Todo from "@/components/Todo.vue";
import Welcome from "@/components/Welcome.vue";
</script>

<template>
  <main class="flex-1 is-flex is-flex-direction-column gap-5">
    <Welcome name="Christy" />
    <div class="is-flex gap-5 two-columns">
      <div class="box flex-1 box-placeholder self-start"></div>
      <Todo />
    </div>
  </main>
</template>

<style lang="scss" scoped>
.two-columns {
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
}
.box-placeholder {
  height: 266px;
  width: 100%;
}
</style>
