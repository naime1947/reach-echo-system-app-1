import React from 'react'
import {connect} from 'react-redux'
import {removeTodo} from './action'
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm'

function TodoList({todos = [], onRemovedPressed}) {
    return (
        <div className="list_wrapper">
            <NewTodoForm/>
            {
                todos.map((todo) => <TodoListItem  todo={todo} onRemovedPressed={onRemovedPressed} /> )
            }
        </div>
    )
}

const mapStateToProps = state=>({
    todos: state.todos
})

const mapDispatchToProps = dispatch =>({
    onRemovedPressed : text => dispatch(removeTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
