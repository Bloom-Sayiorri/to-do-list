import React, { useState } from 'react'
import styles from '../styles/form.module.css';
import Swal from 'sweetalert2';

const Form = ({handleAddTodo, handleUpdateTodo}) => {

    const [ isValid, setIsValid ] = useState(false);
    const [ formData, setFormData ] = useState({
        title: '',
        description: '',
        status: '',
        priority: '',
        dateCreated: new Date().toISOString(),
    });

    const handleChange = (e) => {
        setFormData(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3001/todos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
        .then((res) => res.json())
        .then((data) => handleAddTodo(data))
    };

    const handleUpdate = () => {
        fetch('/api/todos', {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData.priority)
        })
        .then((r) => r.json())
        .then((data) => handleUpdateTodo(data))
    };

    const handleClick = () => {
        Swal.fire({
            title: "Good job",
            text: "Submitted question successfully!",
            icon: "success"
        });
    };

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>Todo Form</h2>
            <form onSubmit ={handleSubmit} className={styles.form}>
                <label htmlFor='title' className={styles.label}>Title:</label>
                <input
                    type='text'
                    name='title'
                    id='title'
                    placeholder='Enter todo...'
                    value={formData.title}
                    className={styles.title}
                    onChange={handleChange}
                />
                <label htmlFor='description' className={styles.label}>Description:</label>
                <input
                    type='text'
                    name='description'
                    id='description'
                    placeholder='Enter description...'
                    value={formData.description}
                    className={styles.description}
                    onChange={handleChange}
                />
                <label htmlFor='status' className={styles.label}>Status:</label>
                <input
                    type='text'
                    name='status'
                    id='status'
                    placeholder='Enter Todo...'
                    value={formData.status}
                    className={styles.status}
                    onChange={handleChange}
                />
                <label htmlFor='priority' className={styles.label}>Priority:</label>
                <input
                    type='text'
                    name='priority'
                    id='priority'
                    placeholder='Enter Todo...'
                    value={formData.priority}
                    className={styles.priority}
                    onChange={handleChange}
                />
                <button className={!isValid ? styles.submitBtn : 'disabled'} onClick={handleClick}>
                    Submit
                </button>
            </form>
        </div>
    </div>
  )
}

export default Form