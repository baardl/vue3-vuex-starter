<template>
  <div>
    <h1>To-Do List</h1>
    <div>
      <TodoNew />
      <TodoList />
    </div>
  </div>
</template>
<script>
import TodoNew from "@/todo/TodoNew.vue";
import TodoList from "@/todo/TodoList.vue";

export default {
  components: {
    TodoNew,
    TodoList
  }
};
</script>
