<template>
  <div class="hello">
    <!--    <h1>{{ msg }}</h1>-->
    <p>
      Tfm2RecAdmin<br>
      <a href="https://www.statsbygg.no/tfm" target="_blank" rel="noopener">Tverrfaglig Merkesystem (TFM)</a>.<br>
      <a href="https://www.realestatecore.io/" target="_blank" rel="noopener">Real Estate Core (REC)</a>.<br>
      <a href="https://open.entra.no/" target="_blank" rel="noopener">Entra Open - Sharing is caring</a>.<br>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Tfm2RecAdmin',
  props: {
    msg: {
      type: String,
      default: "not-set",
      required: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
