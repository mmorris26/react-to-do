import { useState } from "react";
import ToDoList from "./ToDoList";

function App() {
  const [todos, setTodos] = useState([
    'Have fun',
    'Learn React',
    'Learn the MERN-Stack'
  ]);

  const [showTodos, setShowTodos] = useState(true);

  return (
    <div className="App">
      <h1>React To-Do</h1>
      {/* Passing todos Array as a prop */}
      {/* Conditionally render ToDoList */}
      { showTodos && <ToDoList todos={todos} /> }
    </div>
  );
}

export default App;
