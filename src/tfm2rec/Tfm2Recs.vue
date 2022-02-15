<template>
  <div>
    <h1>Tfm2Rec List</h1>
    <div>
      <Tfm2RecNew />
      <Tfm2RecList />
    </div>
  </div>
</template>
<script>
import Tfm2RecNew from "@/tfm2rec/Tfm2RecNew";
import Tfm2RecList from "@/tfm2rec/Tfm2RecList";

export default {
  components: {
    Tfm2RecNew,
    Tfm2RecList
  }
};
</script>
