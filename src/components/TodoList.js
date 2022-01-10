import { useState } from 'react';
import TodoItem from "./TodoItem";

function TodoList() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Setup development environment",
      completed: true
    },
    {
      id: 2,
      title: "Develop website and add content",
      completed: false
    },
    {
      id: 3,
      title: "Deploy to live server",
      completed: false
    }
  ]);


  return (
    <ul className="TodoList">
      {todos.map(todo => (
        <TodoItem key = {todo.id} todo = {todo}/>
      ))}
    </ul>
  );
}

export default TodoList;
