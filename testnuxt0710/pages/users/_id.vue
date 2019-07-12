<template>
  <div class="player">
    <h1>#{{ number }}</h1>
    <h2>{{id}} : {{ name }}</h2>
  </div>
    
</template>

<script>
    export default {
        name: "_id",
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
        },
        validate({params}) {
            return /^\d+$/.test(params.id);
        },
        asyncData ({params}) {
          const user = users.find(user => String(user.id) === params.id)
          if(!user) {
            return error({ message: 'User not found', statusCode: 404})
          }
          return user;
        }
    }
</script>

<style scoped>
  .player {
    text-align: center;
    margin-top: 100px;
    font-family: sans-serif;
  }
</style>
