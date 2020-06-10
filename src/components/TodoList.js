import React from 'react'
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm'

function TodoList({todos}) {
    return (
        <div className="list_wrapper">
            <NewTodoForm/>
            {
                todos.map((todo) => <TodoListItem  todo={todo}/> )
            }
        </div>
    )
}

export default TodoList
