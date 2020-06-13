import React from 'react'

function TodoListItem({todo, onRemovedPressed, onCompletedPressed}) {
    
    return (
        <div className="todo-item-container">
            <h3 style={ todo.isCompleted ?  {textDecoration:'line-through'} : null} >{todo.text}</h3>
            <div className="buttons-container">

            {
                todo.isCompleted ? null : <button
                    onClick = {()=> onCompletedPressed(todo.text)}
                     className="completed-button">Mark As Completed</button>
            }
            
            <button 
            onClick={()=> onRemovedPressed(todo.text) }
            className="remove-button">Remove</button>
            </div>
            
        </div>
    )
}

export default TodoListItem
