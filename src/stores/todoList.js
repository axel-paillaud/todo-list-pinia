import { defineStore } from 'pinia';

export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    todoList: [],
    id: 0,
  }),
  actions: {
    addToDo(item) {
      this.todoList.push({ item, id: this.id++, completed: false });
   },
    deleteTodo(item) {
      this.todoList = this.todoList.filter((object) => object.id !== itemID);
    }
  },
});
