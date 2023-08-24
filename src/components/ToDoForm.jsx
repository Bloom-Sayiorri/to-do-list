import React from 'react';

function ToDoForm() {

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.todo.value);
        
    }


    return(
        <form onSubmit={handleSubmit}>
            <h1>TODO FORM</h1>
            <label htmlFor='todo' className="todo_label" name="todo">Todos</label>
            <input type="text" name="todo" className="todo_input" />
            <input type="submit" className="submit_btn" value="Submit"/>
        </form >
    )
}

export default ToDoForm;