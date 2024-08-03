import React from 'react';
import styles from '../styles/navbar.module.css';
import { Link } from 'react-router-dom';
import { LuMoonStar, LuSunMedium } from "react-icons/lu";

const Navbar = ({ darkTheme, toggleTheme }) => {
  // {"App " + (isDarkMode ? "dark" : "light")}

  return (
    <header className={`${styles.container} ${darkTheme ? 'darkMode' : 'lightMode'}`}>
        <nav className={styles.wrapper}>
          {/* <h1 className={`${styles.heading} + ${darkTheme ? 'darkMode' : 'lightMode'}`}>To-Do App</h1> */}
          <div className={styles.links}>
            <Link to='/todos' className={styles.link}>Todos</Link>
            <Link to='/form' className={styles.link}>Add Todo</Link> 
          </div>
          <div className={styles.togglers} onClick={toggleTheme}>
            { darkTheme ? <LuSunMedium className={styles.sun}/> : <LuMoonStar className={styles.moon}/> }
          </div>
        </nav>
    </header>
  )
}

export default Navbar