<template>
  <form @submit.prevent="addTfm2Rec">
    <input
      type="text"
      placeholder="Enter a new tfm2rec"
      v-model="task"
    >
  </form>
</template>
<script>
export default {
  data() {
    return {
      task: "",
      id: 0
    };
  },
  methods: {
    addTfm2Rec: function() {
      const { id, task } = this;
      this.$store.commit("tfm2recs/addTfm2Rec", { id, task });
      this.id++;
      this.task = "";
    }
  }
};
</script>
