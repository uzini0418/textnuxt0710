<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        Ann's Vue.js
      </h1>
      <div class="links">
        <NLink
        to="/search"
        class="button--green">나라 검색</NLink>
        <NLink
          to="/users"
          class="button--green">user</NLink>
        <NLink
          to="/todo"
          class="button--green">Todo</NLink>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  head () {
    return {
      title: '테스트 타이틀',
      meta: [
        { name: 'description', content: 'desc 테스트' },
        { name: 'keywords', content: '키워드 테스트' }
      ]
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}
</style>

