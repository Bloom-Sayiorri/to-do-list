import React from 'react'
import styles from '../styles/home.module.css';
import Todos from './Todos';

const Home = () => {
  return (
    <main className={styles.container}>
      <p className='text'>Home</p>
      <Todos />
    </main>
  )
}

export default Home