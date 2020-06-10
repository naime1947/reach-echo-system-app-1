import React, {useState} from 'react'

function NewTodoForm() {
    const [inputValue, setInputValue] = useState("");

    return (
        <div className="new-todo-form" >
            <input type="text" 
            value={inputValue} 
            onChange={e=>setInputValue(e.target.value)} 
            placeholder="Type your new todo"
            className="new-todo-input"/>
            <button className = "new-todo-button">Create Todo</button>
        </div>
    )
}

export default NewTodoForm
