import { useState } from "react"

export default function NewToDoForm(props) {
  const [newTodo, setNewTodo] = useState('')

  function handleAddTodo(e) {
    e.preventDefault();

    props.addTodo(newTodo);
    setNewTodo('');
  }

  return (
    <>
      <h2>New To-Do</h2>
      <form onSubmit={handleAddTodo}>
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new to do task..."
          required
          pattern=".{4,}"
        />
        <button type="submit">ADD TO-DO</button>
      </form>
    </>
  )
}