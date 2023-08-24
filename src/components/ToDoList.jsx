import React from 'react';
import ToDoForm from './ToDoForm';
import ToDoItem from './ToDoItem';

function ToDoList({todos}) {
    const displayedTodos = todos.map((todo) => {
        return (
            <ToDoItem
                key={todo.id}
                title={todo.title}
                description={todo.description}
                completed={todo.completed}
            />
        )
    })
    return(
        <main>
            <ToDoForm/>
            <div>
                {displayedTodos}
            </div>
        </main>
    )
}

export default ToDoList;