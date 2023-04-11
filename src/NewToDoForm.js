import { useState } from "react"

export default function NewToDoForm() {
  const [newTodo, setNewTodo] = useState('')

  return (
    <>
      <h2>New To-Do</h2>
      <input placeholder="Add a new to do task..." />
      <button>ADD TO-DO</button>
    </>
  )
}