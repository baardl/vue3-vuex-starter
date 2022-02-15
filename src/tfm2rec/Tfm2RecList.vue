<template>
  Total count = {{count}}
  <ul>
    <li
        v-for="tfm2rec in tfm2recs"
        :key="tfm2rec.id"
    >
      {{ tfm2rec.task }}
    </li>
  </ul>
  <br>
</template>
<script>
export default {
  computed: {
    tfm2recs() {
      return this.$store.getters["tfm2recs/getTfm2Recs"];
    },
    count() {
      return this.$store.getters["tfm2recs/tfm2recsCount"];
    }
  }
};
</script>
