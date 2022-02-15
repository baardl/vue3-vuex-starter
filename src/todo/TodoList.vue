<template>
  Total count = {{count}}
  <ul>
    <li
        v-for="todo in todos"
        :key="todo.id"
    >
      {{ todo.task }}
    </li>
  </ul>
  <br>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.getters["todo/getTodos"];
    },
    count() {
      return this.$store.getters["todo/todoCount"];
    }
  }
};
</script>
