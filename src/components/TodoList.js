import React, { useEffect } from "react";
import {
  loadTodos,
  removeTodoRequest,
  markTodoCompleteRequest,
} from "./thunks";
import { connect } from "react-redux";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import { getTodoIsLoading, getCompletedTodos, getInCompletedTodos } from "./selectors";
function TodoList({
  completedTodos,
  incompletedTodos,
  isLoading,
  onRemovedPressed,
  onCompletedPressed,
  startLoadingTodos,
}) {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  const loadingMessage = <div>Loading todos....</div>;
  const content = (
    <div className="list_wrapper">
      <NewTodoForm />
      <h3>Incompleted Todos</h3>
      {incompletedTodos.map((todo) => (
        <TodoListItem
          key={todo.text}
          todo={todo}
          onRemovedPressed={onRemovedPressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}

      <h3>Completed Todos</h3>
      {completedTodos.map((todo) => (
        <TodoListItem
          key={todo.text}
          todo={todo}
          onRemovedPressed={onRemovedPressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
    </div>
  );

  return isLoading ? loadingMessage : content;
}

const mapStateToProps = (state) => ({
  completedTodos: getCompletedTodos(state),
  incompletedTodos: getInCompletedTodos(state),
  isLoading: getTodoIsLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  onRemovedPressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletedPressed: (id) => dispatch(markTodoCompleteRequest(id)),
  startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
