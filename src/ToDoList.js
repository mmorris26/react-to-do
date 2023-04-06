import './ToDoList.css'
import ToDoListItem from "./ToDoListItem"

export default function ToDoList(props) {
  // Create an Array of <ToDoListItem> comoonents
  const toDoListItems = props.todos.map(function(item, index) {
    return <ToDoListItem todo={item} key={index} index={index} />;
  });

  return (
    <ul className='ToDoList'>
      {toDoListItems}
    </ul>
  )
}