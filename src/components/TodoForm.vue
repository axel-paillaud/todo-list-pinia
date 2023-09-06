<script setup>
import { ref } from 'vue';
const todo = ref('');
</script>

<template>
  <form @submit.prevent="">
    <input v-model="todo" type="text" />
    <button>Add</button>
  </form>
</template>

<style scoped>
</style>
