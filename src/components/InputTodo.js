import { useState } from 'react';
import { FaPlusCircle } from "react-icons/fa"

function InputTodo(props) {
  const [title, SetTitle] = useState("");

  const onChange = e => {
    SetTitle(e.target.value);
  }

  const isEmpty = string => {
    return !string.trim()
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (isEmpty(title)) return alert("Please write item");
    props.addTodoProps(title);
    SetTitle("");
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input type="text" className="input-text" placeholder="Add Todo..." value={title} onChange={onChange}/>
      <button className="input-submit">
        <FaPlusCircle 
          style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }}
        />
      </button>
    </form>
  );
}

export default InputTodo;
