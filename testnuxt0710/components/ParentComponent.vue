<template>
  <div>
    <child-component v-for="s in buttons" :key="s.value" :button-info="s" v-on:timeclick="timeclickEvent"></child-component>
    <hr/>
    <div>{{msg}}</div>
  </div>
</template>

<script>
  import ChildComponent from '~/components/ChildComponent.vue';
    export default {
        name: "ParentComponent",
        components: { ChildComponent },
        props: ['buttons'],
        data: function() {
          return { msg: '' };
        },
        methods: {
          timeclickEvent: function(k, v) { // 속성으로 들어온 두개의 값이 파라미터로 들어감
            this.msg = k + ", " + v;
          }
        }

    }
</script>

<style scoped>

</style>
