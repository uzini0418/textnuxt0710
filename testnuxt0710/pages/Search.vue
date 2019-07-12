<template>
  <section class="container">
    <div>
      <h2 class="subtitle">
        원하는 나라를 검색하세요 !
      </h2>
      <ctry-list />
      <div class="links">
        <NLink
          to="/"
          class="button--grey">돌아가기</NLink>
      </div>
    </div>
  </section>
</template>

<script>
import CtryList from '~/components/CtryList.vue'

  export default {
    name: "Search",
    components: {
      CtryList
    }
  }
</script>

<style scoped>
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
