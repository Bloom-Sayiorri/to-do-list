import React from 'react'
import styles from '../styles/navbar.module.css';
import { NavLink } from 'react-router-dom'
import { LuMoonStar, LuSunMedium } from "react-icons/lu";

const Navbar = () => {

  const handleThemeChange = () => {
    console.log("clicked")
  };

  return (
    <header className={styles.container}>
        <nav className={styles.wrapper}>
          <h1 className={styles.heading}>To-Do App</h1>
          <div className={styles.links}>
            <NavLink to='/todos' className={styles.link}>Todos</NavLink>
            <NavLink to='/form' className={styles.link}>Todo Form</NavLink> 
          </div>
          <div className={styles.togglers}>
            <LuSunMedium className={styles.sun} onClick={handleThemeChange}/>
            <LuMoonStar className={styles.moon} onClick={handleThemeChange}/>
          </div>
        </nav>
    </header>
  )
}

export default Navbar