<template>
    <div class="container">
      <div class="left">
        <h2>
          <NLink to="/">Main Page</NLink>
        </h2>
        <ul class="players">
          <li v-for="user in users" :key="user.id">
            <NLink :to="'/users/'+user.id">
              {{ user.name }}
            </NLink>
          </li>
        </ul>
      </div>
      <div class="right">
        <NuxtChild :key="$route.params.id" />
      </div>

    </div>
</template>

<script>
    export default {
        name: "users",
        data: function() {
          return {
            users: [
              { id: 1, name: '바나나', number: 24 },
              { id: 2, name: '사과', number: 30 },
              { id: 3, name: '키위', number: 24 },
              { id: 4, name: '참외', number: 5 },
              { id: 5, name: '오렌지', number: 9 }
            ]
          }
        }
    }
</script>


<style scoped>
  .page-enter-active, .page-leave-active {
    transition: opacity .4s, transform .4s;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    opacity: 1;
  }
  .page-enter, .page-leave-active {
    opacity: 0.5;
    transform: rotateY(100deg);
  }
  .container {
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    box-sizing: border-box;
  }
  .left {
    width: 50%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .right {
    width: 50%;
    position: absolute;
    top: 0;
    right: 0;
  }
  .players {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .players li a {
    display: block;
    border: 1px #ddd solid;
    padding: 10px;
    text-align: left;
    color: #222;
    text-decoration: none;
  }
  .players li a:hover {
    color: orange;
  }
</style>
