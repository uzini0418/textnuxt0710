import Constant from '../constant';

export default {
  [Constant.ADD_TODO]: (store, payload) => {
    console.log("###addtodo!!!");
    store.commit(Constant.ADD_TODO, payload);
  }
}
