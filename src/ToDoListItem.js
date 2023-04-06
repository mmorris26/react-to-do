import './ToDoListItem.css';

export default function ToDoListItem(props) {
  return (
    <li 
      className='ToDoListItem'
      style={{
        backgroundColor: props.index % 2 ? "lavender" : "hotpink"
      }}
    >
      <div className="flex-ctr-ctr">{props.index + 1}</div>
      {props.todo}
    </li>
  )
}