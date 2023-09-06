<script setup>
import { ref } from 'vue';
import { useTodoListStore } from '/src/stores/todoList';
const todo = ref('');

// Use Pinia store :
const store = useTodoListStore();

function addItemAndClear(item) {
  if (item.length === 0) return;

  store.addTodo(item);
  todo.value = '';
}

</script>

<template>
  <form @submit.prevent="addItemAndClear(todo)">
    <input v-model="todo" type="text" />
    <button>Add</button>
  </form>
</template>

<style scoped>
</style>
