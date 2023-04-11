import { useState } from "react";
import ToDoList from "./ToDoList";
import NewToDoForm from "./NewToDoForm";

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

      {/* Add a button */}
      <button onClick={() => setShowTodos(!showTodos)}>{showTodos ? 'HIDE' : 'SHOW'}</button>

      {/* Passing todos Array as a prop */}
      {/* Conditionally render ToDoList */}
      { showTodos && <ToDoList todos={todos} /> }

      <hr />
      <NewToDoForm />
    </div>
  );
}

export default App;
