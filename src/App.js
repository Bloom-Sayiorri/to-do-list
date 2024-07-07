import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {

  const [ darkTheme, setDarkTheme ] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((theme) => !theme);
  };

  return (
    <BrowserRouter>
      <div className={`container ${darkTheme ? 'dark': 'light'}`}>
        <Navbar darkTheme={darkTheme} toggleTheme={toggleTheme}/>
        <Routes>
          <Route exact path='/' element={<Home />}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App