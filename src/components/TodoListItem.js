import React from 'react'

function TodoListItem({todo, onRemovedPressed}) {
    return (
        <div className="todo-item-container">
            <h3>{todo.text}</h3>
            <div className="buttons-container">
            <button className="completed-button">Mark As Completed</button>
            <button 
            onClick={()=> onRemovedPressed(todo.text) }
            className="remove-button">Remove</button>
            </div>
            
        </div>
    )
}

export default TodoListItem
