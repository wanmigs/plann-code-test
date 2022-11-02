<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>

<template>
  <div class="box">
    <div class="is-size-3 font-bold has-text-navy">
      HI <span class="has-text-skyblue">{{ name }},</span>
    </div>
    <div class="uppercase is-size-1 font-bold has-text-navy">
      Welcome back 👋
    </div>
  </div>
</template>

<style scoped></style>
