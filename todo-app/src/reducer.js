const reducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL":
      return { ...state, todos: action.payload, loading: false };
    case "DONE":
      const temp = state.todos.map((todo) => {
        if (todo.id === action.payload) todo = { ...todo, isDone: true };
        return todo;
      });
      return { ...state, todos: temp };
    case "DELETE":
      const temp2 = state.todos.filter((todo) => todo.id !== action.payload);
      return { ...state, todos: temp2 };
    case "POST":
      const newTodos = [action.payload].concat(state.todos);
      return { ...state, todos: newTodos };

    case "DETAILS":
      if (action.payload === null) {
        return { ...state, current: null };
      }
      const temp3 = state.todos.filter((todo) => todo.id === action.payload)[0];
      console.log(temp3);
      return { ...state, current: temp3 };
    default:
      return state;
  }
};

export default reducer;
