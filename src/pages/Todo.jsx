import React from 'react'
import styles from '../styles/todo.module.css';

const Todo = ({todo, onUpdateTodo, onDeleteTodo}) => {

    function updateTodo() {
        fetch(`http://localhost:3001/todos/${todo.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({todoTitle: todo.title})
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
    }

    const deleteTodo = () => {
        fetch(`http://localhost:3001/todos/${todo.id}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
        })
        .then((res) => res.json())
        .then(data => onDeleteTodo(data))
    }

  return (
    // <div className={styles.container}>
    <li className={styles.wrapper}>
        <h1 className={styles.title}>{todo.title}</h1>
        <p className={styles.id}>{todo.id}</p>
        <p className={styles.description}>{todo.description}</p>
        <p className={styles.status}>{todo.status}</p>
        <p className={styles.priority}>{todo.priority}</p>
        <p className={styles.dateCreated}>{todo.dateCreated}</p>
        <button className={styles.delete} onClick={deleteTodo}>Delete</button>
    </li>
    // {/* </div> */}
  )
}

export default Todo