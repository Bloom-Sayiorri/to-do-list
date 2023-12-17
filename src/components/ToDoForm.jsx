import React from 'react';
import '../styles/form.css';

function ToDoForm({todos}) {

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.todo.value);
    }


    return(
        <form onSubmit={handleSubmit}>
            <h1>TODO FORM</h1>
            <div className='questions'>
                <label htmlFor='todo' className="todo_label" name="todo">Todos</label>
                <input>{todos.title}</input>
                <label htmlFor='description' className="todo_label" name="todo">Description</label>
                <input type="text" name="todo" className="todo_input" />
            </div>
            <input type="submit" className="submit_btn" value="Submit"/>
        </form>
    )
}

export default ToDoForm;