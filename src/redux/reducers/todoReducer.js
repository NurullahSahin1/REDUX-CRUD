import { ActionsTypes } from "../actionTypes/acttionTypes";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ActionsTypes.ADD_TODO:
      const tempTodos = state.todos.concat(action.payload);
      return {
        todos: tempTodos,
      };
    case ActionsTypes.DELETE:
      const filtered = state.todos.filter((todo) => todo.id !== action.payload);
      return { todos: filtered };

    case ActionsTypes.UPDATE:
      const updated = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      return { todos: updated };

    case ActionsTypes.SET:
      return { todos: action.payload };
    default:
      return state;
  }
};

export default todoReducer;
