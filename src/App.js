import './App.css';
import ToDoList from './components/ToDoList';
import {todos} from '../src/todos';
import { FaMoon } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <FaMoon />
      <ToDoList todos={todos}/>
    </div>
  );
}

export default App;
