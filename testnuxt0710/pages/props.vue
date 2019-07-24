<template>
  <div>
    <h3>props 예제 페이지 입니다.</h3>
    <ul>
      <list-component message="Hello" :count="10"></list-component>
      <list-component message="lala" :count="50"></list-component>
      <list-component message="니하오마" :count="5" :countries="['중국','일본','베트남']"></list-component>
    </ul>
  </div>
</template>

<script>
  import ListComponent from '~/components/ListComponent.vue';
    export default {
        name: "props",
        components: { ListComponent }
    }
</script>

<style scoped>

</style>
