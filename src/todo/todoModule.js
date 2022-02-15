
const state = {
  todos: []
}
const mutations = {
  addTodo(state, item) {
    console.log("Add:", item);
    state.todos.unshift(item);
  }
}
const getters = {
  getTodos(state) {
    return state.todos;
  },
  todoCount(state) {
    return state.todos.length;
  }
}
export const todo = {
  namespaced: true,
  state,
  // actions,
  mutations,
  getters
};
