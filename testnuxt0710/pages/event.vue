<template>
  <div>
    <parent-component :buttons="buttons"></parent-component>
  </div>
</template>

<script>
  import ParentComponent  from '~/components/ParentComponent.vue';

    export default {
        name: "event",
        components: { ParentComponent },
        data: function() {
          return {
            buttons: [
              { text: "Hello", value: "영어" },
              { text: "씬짜오", value: "베트남어" },
              { text: "니하오", value: "중국어" }
            ]
          }
        }
    }
</script>

<style scoped>

</style>
