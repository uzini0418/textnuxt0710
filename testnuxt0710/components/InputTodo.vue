<template>
  <div class="input-box">
    <input type="text" class="input" id="task" v-model.trim="todo" placeholder="입력 후 엔터!" v-on:keyup.enter="addTodo">
    <span class="addbutton" v-on:click="addTodo">추 가</span>
  </div>
</template>

<script>
import eventBus from './EventBus.vue'

    export default {
        name: "InputTodo",
        data: function() {
          return {todo: ""}
        },
        methods: {
          addTodo: function() {
            eventBus.$emit('add-todo', this.todo);
            this.todo = "";
          }
        }
    }
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.input-box {
  margin: 30px;
}
.input {
  border: none; width: 300px; height: 35px; padding: 10px;
  float: left; font-size: 16px;
}
.addbutton {
  padding: 10px; width: 100px; height: 35px; background: #d9d9d9;
  color: #555; float: left; text-align: center;
  font-size: 13px; cursor: pointer; transition: 0.3s;
}
.addbutton:hover {
  background-color: #bbb;
}
</style>
