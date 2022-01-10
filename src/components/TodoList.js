import TodoItem from "./TodoItem";

function TodoList(props) {

  return (
    <ul className="TodoList">
      {props.todos.map(todo => (
        <TodoItem 
          key = {todo.id} 
          todo = {todo}
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps = {props.deleteTodoProps}
          setUpdate={props.setUpdate}
        />
      ))}
    </ul>
  );
}

export default TodoList;
