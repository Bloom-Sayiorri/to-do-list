import React, { useState } from 'react'
import styles from '../styles/form.module.css';
import Swal from 'sweetalert2';

const Form = () => {

    const [ formData, setFormData ] = useState({
        title: '',
        description: '',
        status: '',
        priority: '',
    });

    const handleChange = (e) => {
        setFormData(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('', {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
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
            <h2 className={styles.heading}>Add New Todo</h2>
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
                <button className={styles.submitBtn} onClick={handleClick}>
                    Submit
                </button>
            </form>
        </div>
    </div>
  )
}

export default Form