<script setup>
  import TodoForm from '/src/components/TodoForm.vue';
  import TodoList from '/src/components/TodoList.vue';
</script>

<template>
  <div class="todo-app">
    <h1>TODO APP</h1>
    <TodoForm />
    <TodoList />
  </div>
</template>

<style scoped>
.todo-app {
  padding: 5vh;
  min-height: 100vh;
  width: 30vw;
  background-color: #f7f9fc;
}

h1 {
  margin: 32px 0;
}
</style>

