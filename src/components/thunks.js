import {
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure,
  createTodo,
  removeTodo,
  markCompleted
} from "./action";
export const loadTodos = () => async (dispatch) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch("http://localhost:8080/todos");
    const todos = await response.json();

    dispatch(loadTodosSuccess(todos));
  } catch (e) {
    dispatch(loadTodosFailure());
    displayAlert(e);
  }
};

export const addTodoRequest = (text) => async (dispatch) => {
  try {
    const body = JSON.stringify({ text });
    const response = await fetch("http://localhost:8080/todos", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body,
    });

    const todo = await response.json();
    dispatch(createTodo(todo));
  } catch (e) {
    displayAlert(e);
  }
};

export const removeTodoRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}`, {
      method: "delete",
    });
    const todo = await response.json();
    dispatch(removeTodo(todo));
  } catch (e) {
    displayAlert(e);
  }
};

export const markTodoCompleteRequest = id => async dispatch=>{
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}/completed`,{
            method:'post'
        })
        const todo = await response.json();
        dispatch(markCompleted(todo));

    } catch (e) {
        displayAlert(e);
    }
}

export const displayAlert = (text) => {
  alert(text);
};
