import './App.css';
import ToDoList from './components/ToDoList';
import {todos} from '../src/todos';
import { FaMoon } from "react-icons/fa";
import { CiLight } from "react-icons/ci";

function App() {
  return (
    <div className="App">
      <div>
        <FaMoon />
        <CiLight />
      </div>
      
      <ToDoList todos={todos}/>
    </div>
  );
}

export default App;
