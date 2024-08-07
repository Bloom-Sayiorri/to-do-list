import React from 'react'
import Todo from './Todo';

const TodoList = ({todos, setTodos}) => {

  const handleUpdateTodo = (updatedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === updatedTodo.id) {
        return updatedTodo;
      } else {
        return todo;
      }
    })
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (deletedTodo) => {
    const updatedTodo = todos.filter((todo) => todo.id !== deletedTodo.id);
    setTodos(updatedTodo);
  };

  return (
    <div>
        <h1>Todos</h1>
        <ul>
          {
            todos.map((todo) => {
              return  (
                <Todo
                  key={todo.id}
                  todo={todo}
                  onDeleteTodo={handleDeleteTodo}
                  onUpdateTodo={handleUpdateTodo}
                />      
              )
            })
          }
        </ul>
        {/* <Todos 
          todos=
        /> */}
    </div>
  )
}

export default TodoList