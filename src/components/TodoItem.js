
function TodoItem(props) {
  return (
    <li className="TodoItem">
       <input type="checkbox" checked={props.todo.completed}  />
      {props.todo.title}    
    </li>
  );
}

export default TodoItem;
