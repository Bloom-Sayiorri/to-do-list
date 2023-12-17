import './App.css';
import ToDoList from './components/ToDoList';
import {todos} from '../src/todos';

function App() {
  return (
    <div className="App">
      <ToDoList todos={todos}/>
    </div>
  );
}

export default App;
