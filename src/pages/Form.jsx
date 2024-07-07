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
            <form onSubmit ={handleSubmit} className={styles.form}>
                <label className={styles.titleLabel}>
                    Title: 
                    <input
                        type='text'
                        name='title'
                        placeholder='Enter Todo...'
                        value={formData.title}
                        className={styles.title}
                    />
                </label>
                <label className={styles.descriptionLabel}>
                    Description: 
                    <input
                        type='text'
                        name='description'
                        placeholder='Enter Todo...'
                        value={formData.description}
                        className={styles.description}
                    />
                </label>
                <label className={styles.statusLabel}>
                    Status: 
                    <input
                        type='text'
                        name='status'
                        placeholder='Enter Todo...'
                        value={formData.status}
                        className={styles.status}
                    />
                </label>
                <label className={styles.priorityLabel}> 
                    Priority: 
                    <input
                        type='text'
                        name='priority'
                        placeholder='Enter Todo...'
                        value={formData.priority}
                        className={styles.priority}
                    />
                </label>
                <label className={styles.dateCreatedLabel}>
                    Date-Created: 
                    <input
                        type='text'
                        name='dateCreated'
                        placeholder='Enter Todo...'
                        value={formData.dateCreated}
                        className={styles.dateCreated}
                    />
                </label>
            </form>
        </div>
    </div>
  )
}

export default Form