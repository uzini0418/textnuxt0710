import Constant from '~/constant';

export default {
  [Constant.CHANGE_NO]: (state, payload) => {
    if(payload.no !== "") {
      state.no = payload.no;
    }
  },

  // todoList mutation
  [Constant.ADD_TODO]: (state, payload) => {
    // state 변이 작업
    if(payload.todo !== "") {
      state.todolist.push({ todo: payload.todo, done:false });
    }
  }
}
