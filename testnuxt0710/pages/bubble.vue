<template>
  <div
    id="outer" @click="outerClick">outer
    <div id="inner" @click="innerClick">inner</div>
  </div>
</template>

<script>
  export default {
    name: "bubble",
    methods: {
      outerClick: function(e) {
        console.log("outer")
        console.log("event phase: " + e.eventPhase);
        console.log("event currentTarget: ", e.currentTarget);
        console.log("event target: ",  e.target);
        e.stopPropagation(); //버블링x
      },
      innerClick: function(e) {
        console.log("inner")
        console.log("event phase: " + e.eventPhase);
        console.log("event currentTarget: ", e.currentTarget);
        console.log("event target: ", e.target);
        e.stopPropagation(); //버블링x
      }
    }
  }
</script>

<style scoped>
  #outer {
    width:200px;
    height:200px;
    background-color: #41B883;
  }
  #inner {
    width:100px;
    height:100px;
    background-color: #526488;
  }
</style>
