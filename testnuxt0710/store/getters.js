export default {
  getContactOne(state) {
    //console.log(state);
    var no = state.no;
    var arr = state.contacts.filter(function(item, index) {
      return item.no == no;
    });
    if(arr.length == 1) return arr[0];
    else return {};
  },
  getContacts(state) {
    return state.contacts;
  },
  // TodoList
  getTodoList(state) {
    return state.todolist;
  }
}
