import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TodoList from './pages/TodoList';
import Form from './pages/Form';

function App() {

  const [ darkTheme, setDarkTheme ] = useState(false);
  const [ todos, setTodos ] = useState([]);

  const toggleTheme = () => {
    setDarkTheme((theme) => !theme);
  };

  useEffect(() => {
      fetch('http://localhost:3001/todos')
      .then((res) => res.json())
      .then((data) => setTodos(data))
  }, []);

  const handleAddTodo = (newTodo) => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  };

  return (
    <BrowserRouter>
      <div className={`container ${darkTheme ? 'dark': 'light'}`}>
        <Navbar darkTheme={darkTheme} toggleTheme={toggleTheme}/>
        <Routes>
          <Route exact path='/todos' element={<TodoList todos={todos} setTodos={setTodos}/>}/>
          <Route path='/form' element={<Form handleAddTodo={handleAddTodo}/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App