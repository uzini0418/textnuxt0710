<template>
  <div id="example">
    <input-ctry />
    <table-ctry />
  </div>
</template>

<script>
  import InputCtry from './InputCtry.vue';
  import TableCtry from './TableCtry.vue';

  export default {
    name: "ctry-list",
    components: {
      InputCtry,
      TableCtry
    }
  }

</script>
