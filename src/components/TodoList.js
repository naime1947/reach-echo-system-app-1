import React, {useEffect} from 'react'
import {loadTodos, removeTodoRequest, markTodoCompleteRequest} from './thunks'
import {connect} from 'react-redux'
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm'
function TodoList({todos = [], isLoading, onRemovedPressed, onCompletedPressed, startLoadingTodos}) {
    useEffect(()=>{
        startLoadingTodos();
    }, [])

    const loadingMessage = <div>Loading todos....</div>
    const content = (
        <div className="list_wrapper">
            <NewTodoForm/>
            {
                todos.map((todo) => 
                <TodoListItem  
                key={todo.text}
                todo={todo} 
                onRemovedPressed={onRemovedPressed} 
                onCompletedPressed = {onCompletedPressed} /> )
            }
        </div>
    );

    return isLoading ? loadingMessage : content;
}

const mapStateToProps = state=>({
    todos: state.todos, 
    isLoading: state.isLoading
})

const mapDispatchToProps = dispatch =>({
    onRemovedPressed : id => dispatch(removeTodoRequest(id)),
    onCompletedPressed: id => dispatch(markTodoCompleteRequest(id)), 
    startLoadingTodos: ()=> dispatch(loadTodos())
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
