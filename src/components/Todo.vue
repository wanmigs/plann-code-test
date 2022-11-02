<script setup lang="ts">
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  type?: string;
}

import TodoItem from "./TodoItem.vue";
import IconTodoSprite from "./icons/IconTodoSprite.vue";
import { useFetch } from "@/helpers/fetch";
import { computed } from "vue";

/**
 * Fetch todos data.
 */
const { data } = useFetch("https://jsonplaceholder.typicode.com/todos");

/**
 * Get first 5 items.
 */
const todos: Todo[] = computed(() => {
  return data.value.slice(0, 5).map((item: Todo) => {
    item.type = item.completed ? "mail" : "presentation";
    return item;
  });
});
</script>

<template>
  <section class="box self-start">
    <IconTodoSprite />
    <span class="heading font-bold uppercase has-text-navy"
      >Your to-dos for today</span
    >
    <div class="is-flex is-flex-direction-column gap-4">
      <TodoItem v-for="todo in todos" :key="todo.id" :type="todo.type">
        <template #content>
          {{ todo.title }}
        </template>
      </TodoItem>
    </div>
    <div
      class="text-sm uppercase font-bold mt-6 has-text-right has-text-skyblue"
    >
      <span>See all</span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  width: 100%;

  @media (min-width: 1024px) {
    max-width: 406px;
  }

  .heading {
    font-size: 22px;
    line-height: 27px;
    margin-bottom: 40px;
  }
}
</style>
