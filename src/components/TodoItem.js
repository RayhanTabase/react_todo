import React, { useState, useEffect } from "react"
import { FaTrash } from "react-icons/fa"
import styles from "./TodoItem.module.css"

function TodoItem(props) {
  const [editing, setEditing] = useState(false);
  useEffect(() => {
    return () => {
      console.log("Cleaning up...")
    }
  }, [])

  const handleEditing = () => {
    setEditing(true);
  }

  const handleUpdatedDone = e => {
    if (e.key === "Enter") {
      setEditing(false);
    }
  }

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const hideDisplay = {
    display:"none"
  }  

  const {id, completed, title} = props.todo


  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={editing ? hideDisplay: null }>
        <input 
          type="checkbox"
          className={styles.checkbox}
          checked={completed} 
          onChange={() => props.handleChangeProps(id)}
          />
        <button onClick={() => props.deleteTodoProps(id)}>
          <FaTrash 
            style={{ color: "orangered", fontSize: "16px" }}
          />
        </button>
        <span style={completed ? completedStyle : null}>
          {title}   
        </span>
      </div>
      <input
        type="text"
        className={styles.textInput}
        value={title}
        style={editing ? null : hideDisplay }
        onChange={e => {
            props.setUpdate(e.target.value, id)
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
}

export default TodoItem;
