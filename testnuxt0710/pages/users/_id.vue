<template>
  <div class="player">
    <h1>#{{ number }}</h1>
    <h2>{{id}} : {{ name }}</h2>
  </div>
    
</template>

<script>
    export default {
        name: "userid",
        validate({params}) {
          return !isNaN(+params.id);
        },
        asyncData ({params, env, error}) {
          console.log(params);
          console.log(env);
          console.log(error);
          const user = env.users.find(user => String(user.id) === params.id)
          console.log(user);
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
