import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED_TODO,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
  loadTodosSuccess,
} from "./action";

const initialTodos = {
  isToloLoading: false,
  data: [],
};

export const todos = (state = initialTodos, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      return { ...state, data: state.data.concat(todo) };
    }

    case REMOVE_TODO: {
      const { todo: todoToRemove } = payload;
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== todoToRemove.id),
      };
    }
    case MARK_COMPLETED_TODO: {
      const { todo: updatedTodo } = payload;
      return {
        ...state,
        data: state.data.map((todo) => {
          if (todo.id === updatedTodo.id) {
            return updatedTodo;
          }

          return todo;
        }),
      };
      // return [...state, todo];
    }
    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return { ...state, isToloLoading: false, data: todos };
    }
    case LOAD_TODOS_IN_PROGRESS:
    case LOAD_TODOS_FAILURE:

    default:
      return state;
  }
};
