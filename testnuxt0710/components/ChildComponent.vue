<template>
  <div>
    <button class="buttonstyle" v-on:click="clickEvent" :data-lang="buttonInfo.value">{{buttonInfo.text}}</button>
  </div>
</template>

<script>
    export default {
        name: "ChildComponent",
        props: ['buttonInfo'],
        methods: {
          clickEvent: function(e) {
            this.$emit('timeclick', e.target.innerText, e.target.dataset.lang); // e.target.dataset.lang = data-leng의 값
          }
        }
    }
</script>

<style scoped>

</style>
