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

  function addTodo(todo) {
    // Replace the state, and not mutate it
    setTodos([...todos, todo]);
  }

  return (
    <div className="App">
      <h1>React To-Do</h1>

      {/* Add a button */}
      <button onClick={() => setShowTodos(!showTodos)}>{showTodos ? 'HIDE' : 'SHOW'}</button>

      {/* Passing todos Array as a prop */}
      {/* Conditionally render ToDoList */}
      { showTodos && <ToDoList todos={todos} /> }

      <hr />
      <NewToDoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
