import { CREATE_TODO, REMOVE_TODO, MARK_COMPLETED_TODO } from "./action";

export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO:
      {
        const { text } = payload;
        const newTodo = { text, isCompleted: false };
        return state.concat(newTodo);
      }
      break;

    case REMOVE_TODO:
      {
        const { text } = payload;
        return state.filter((todo) => todo.text !== text);
      }
      break;
    case MARK_COMPLETED_TODO:
      {
        const { text } = payload;
        return state.map( todo => {
          if(todo.text === text){
            return {...todo, isCompleted: true};
          }

          return todo;
        })
      }
      break;

    default:
      return state;
  }
};
