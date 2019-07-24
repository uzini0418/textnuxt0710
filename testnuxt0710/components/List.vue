<template>
  <ul id="todolist">
    <li v-for="(a, index) in getTodoList" :class="checked(a.done)" :key="index"
        v-on:click="doneToggle(index)">
      <span>{{ a.todo }}</span>
      <span v-if="a.done"> (완료)</span>
      <span class="close" v-on:click.stop="deleteTodo(index)">&#x00D7;</span>

    </li>
  </ul>

</template>

<script>
import eventBus from './EventBus.vue';
import { mapState, mapGetters, mapMutations } from 'vuex';
    export default {
        name: "List",
      /*
      created: function() {
          eventBus.$on('add-todo', this.addTodo);
      },
      */
      /* event bus
      data: function() {
          return {
            todolist : [
              { todo: '영화보기', done:false },
              { todo: '주말 산책', done:true },
              { todo: 'ES6 학습', done:false },
              { todo: '야구장', done:false }
            ]
          }
      },
      */
      methods: {
        checked: function (done) {
          if (done) return {checked: true};
          else return {checked: false};
        },
        // addTodo: function (todo) {
        //   if (todo !== "") {
        //     this.todolist.push({todo: todo, done: false});
        //   }
        // },
        doneToggle: function (index) {
          console.log('doneToggle');
          console.log(index);
          console.log("22");
          this.getTodoList[index].done = !this.getTodoList[index].done;
          //this.todolist[index].done = !this.todolist[index].done;
        },
        deleteTodo: function (index) {
          console.log('deleteTodo');
          this.getTodoList.splice(index, 1);
          //this.todolist.splice(index, 1);
        },

      },

      // computed: {
      //   todolist: function() {
      //     return this.$store.state.todolist;
      //   }
      // }
      //computed: mapState(['todolist'])
      // computed: {
      //   getTodoList: function() {
      //       return this.$store.getters.getTodoList;
      //   }
      // }
      computed: mapGetters(['getTodoList'])
    }
</script>

<style scoped>
* {
  box-sizing: border-box;
}
ul {
  margin: 0; padding: 0;
}
ul li {
  cursor: pointer; position: relative; padding: 8px 8px 8px 40px;
  background: #eee; font-size: 14px; transition: 0.2s;
  -webkit-user-select: none; -moz-user-select: none;
  -ms-user-select: none; user-select: none;
}
ul li:hover { background: #ddd; }
ul li.checked {
  background: #BBB; color: #fff; text-decoration: line-through;
}
ul li.checked::before {
  content: ''; position: absolute; border-color: #fff;
  border-style: solid; border-width: 0px 1px 1px 0px;
  top: 10px; left: 16px; transform: rotate(45deg);
  height: 8px; width: 8px;
}
.close {
  position: absolute; right:0; top:0;
  padding: 8px 12px 8px 12px;
}
.close:hover {
  background-color: #f44336; color: white;
}
</style>
