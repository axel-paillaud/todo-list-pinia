<script setup>
import { useTodoListStore } from '@/stores/todoList';
import { storeToRefs } from 'pinia';

const store = useTodoListStore();

const { todoList } = storeToRefs(store);
const { toggleCompleted, deleteTodo } = store;

</script>

<template>
  <ul class="list-container">
    <li class="list-item" v-for="todo in todoList" :key="todo.id">
      <span :class="{ completed: todo.completed }">{{ todo.item  }}</span>
      <span class="checkmark" @click.stop="toggleCompleted(todo.id)">&#10004;</span>
      <span @click="deleteTodo(todo.id)" class="x">&#10060;</span>
    </li>
  </ul>
</template>

<style scoped>
.list-container {
  list-style-type: none;
  padding: 0;
}

.list-item {

}

.completed {
  text-decoration: line-through;
}

.checkmark, .x {
  cursor: pointer;
}
</style>

