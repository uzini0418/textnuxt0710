<template>
  <li>{{message}}, {{count}}, {{countries}}</li>
</template>

<script>
    export default {
        name: "ListComponent",
        props: {
          message: { type:String, default: '안녕하세요' },
          count: { type:Number, required:true },
          countries: {
            type:Array,
            default: function() {
              return ['대한민국'];
            }
          }
        }
    }
</script>

<style scoped>

</style>
