import React, { useEffect, useState } from 'react'
import styles from '../styles/todo.module.css';

const Todo = () => {
    const [ todos, setTodos ] = useState([])

    // const todo = {
    //     id: Number,
    //     title: String,
    //     description: String,
    //     status: String,
    //     priority: String,
    //     dateCreated: String,
    // }

    // useEffect(() => {
    //     fetch('http://localhost:8000/todos')
    //     .then(r => r.json())
    //     .then((data) => setTodos(data))
    // }, []);

  return (
    <div className={styles.container}>
        {
            todos.map((todo) => {
                return (
                    <div className={styles.wrapper}>
                        <h1 className={styles.title}>{todo.title}</h1>
                        <p className={styles.description}>{todo.description}</p>
                        <p className={styles.status}>{todo.status}</p>
                        <p className={styles.priority}>{todo.priority}</p>
                        <p className={styles.dateCreated}>{todo.dateCreated}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Todo