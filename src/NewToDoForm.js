import { useState } from "react"

export default function NewToDoForm(props) {
  const [newTodo, setNewTodo] = useState('')

  function handleAddTodo() {
    // alert(newTodo);
    props.addTodo(newTodo);
    setNewTodo('');
  }

  return (
    <>
      <h2>New To-Do</h2>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new to do task..." />
      <button onClick={handleAddTodo}>ADD TO-DO</button>
    </>
  )
}