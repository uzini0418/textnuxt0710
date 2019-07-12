<template>
  <div>
    <p>
      국가명 : <input type="text" v-model.trim="countryname" placeholder="국가명" />
    </p>
    <p>{{aaa}}</p>
  </div>
</template>

<script>
  import eventBus from './EventBus.vue'
    export default {
        name: "input-ctry",
        data: function() {
          return {countryname: ""}
        },
        computed: {
        aaa: function() {
          // tableList 에게 넘김
          // return eventBus.$emit('search-ctry', this.countryname);
          eventBus.$emit('search-ctry', this.countryname);
          return this.countryname + "!!!"
        }
      }
    }
</script>

<style scoped>

</style>
