import React from 'react'
import {connect} from 'react-redux'
import {removeTodo, markCompleted} from './action'
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm'

function TodoList({todos = [], onRemovedPressed, onCompletedPressed}) {
    console.log(todos);
    return (
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
    )
}

const mapStateToProps = state=>({
    todos: state.todos
})

const mapDispatchToProps = dispatch =>({
    onRemovedPressed : text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markCompleted(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
