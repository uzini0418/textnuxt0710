<template>
  <div>
    <div class="header">
      <h1 class="headerText">Ann Page</h1>
      <nav>
        <ul class="layout-ul">
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">About</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contacts">Contacts</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/props">props</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/event">event</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/bubble">bubble</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>

    <div class="conatainer">
      <nuxt/> <!-- pages에 작성한 .vue 컴포넌트들이 나타난다. -->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'default'
  }
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.header {
  background-color: pink; padding: 10px 0px 0px 0px;
  text-align: center;
}
.headerText {
  padding: 10px;
}
.layout-ul {
  list-style-type: none; margin: 0; padding: 0;
  overflow: hidden; background-color: #ff748c;
}
.layout-ul li {
  float: left;
}
.layout-ul li a {
  display: block; color: yellow; text-align: center;
  padding: 14px 16px; text-decoration: none;
}
.layout-ul li a:hover {
  background-color: #ddc0ff; color: black;
}
</style>

