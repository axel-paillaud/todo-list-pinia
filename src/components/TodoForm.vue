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
    <input class="form-input" v-model="todo" type="text" />
    <button class="add-button">Add</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  justify-content: center;
  gap: 16px;
}
.form-input {
  padding: 4px;
}

.add-button {
  cursor: pointer;
  background-color: #2f6089;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  font-weight: 800;
  color: white;
  width: 15%;
}
</style>
