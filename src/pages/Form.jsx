import React, { useState } from 'react'
import styles from '../styles/form.module.css';

const Form = () => {

    const [ formData, setFormData ] = useState({
        title: '',
        description: '',
        status: '',
        priority: '',
        dateCreated: '',
    });

    const handleSubmit = () => {};

    const handleChange = () => {};

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>Add New Todo</h2>
            <form onSubmit ={handleSubmit} className={styles.form}>
                <label htmlFor='title' className={styles.titleLabel}>Title:</label>
                <input
                    type='text'
                    name='title'
                    id='title'
                    placeholder='Enter todo...'
                    value={formData.title}
                    className={styles.title}
                />
                <label htmlFor='description' className={styles.descriptionLabel}>Description:</label>
                <input
                    type='text'
                    name='description'
                    id='description'
                    placeholder='Enter description...'
                    value={formData.description}
                    className={styles.description}
                />
                <label htmlFor='status' className={styles.statusLabel}>Status:</label>
                <input
                    type='text'
                    name='status'
                    id='status'
                    placeholder='Enter Todo...'
                    value={formData.status}
                    className={styles.status}
                />
                <label htmlFor='priority' className={styles.priorityLabel}>Priority:</label>
                <input
                    type='text'
                    name='priority'
                    id='priority'
                    placeholder='Enter Todo...'
                    value={formData.priority}
                    className={styles.priority}
                />
                <label htmlFor='dateCreated' className={styles.dateCreatedLabel}>Date-Created:</label>
                <input
                    type='text'
                    name='dateCreated'
                    id='dateCreated'
                    placeholder='Enter Todo...'
                    value={formData.dateCreated}
                    className={styles.dateCreated}
                />
                <button className={styles.submitBtn}>
                    Submit
                </button>
            </form>
        </div>
    </div>
  )
}

export default Form