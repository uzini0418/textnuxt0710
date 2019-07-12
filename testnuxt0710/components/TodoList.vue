<template>
  <div id="todolistapp">
    <div id="header" class="header">
      <h2>Todo List App</h2>
      <input-todo></input-todo>
    </div>
    <list></list>
    <NLink to="/">돌아가기</NLink>
  </div>
    
</template>

<script>
import InputTodo from './InputTodo.vue';
import List from './List.vue';

    export default {
        name: "TodoList",
        components: { InputTodo, List }
    }
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.header {
  background-color: purple;
  padding: 30px 30px;
  color: yellow;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header:after {
  content: ""; display: table; clear: both;
}
</style>
