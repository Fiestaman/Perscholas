import { useState } from "react";

export default function Todo(props) {
  const [showInput, setShowInput] = useState(false);

  return (
    <li>
      <div className="left">
        <h2
          onClick={() => {
            setShowInput(!showInput);
          }}
        >
          {props.todo.text}
        </h2>

        <input
          style={{ display: showInput ? "block" : "none" }}
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              props.editTodoText(props.todo.id, e);
              setShowInput(false);
            }
          }}
        />
      </div>
      <label>
        Complete
        <input
          type="checkbox"
          checked={props.todo.completed}
          onChange={() => {
            props.completeTodo(props.todo.id);
          }}
        />
      </label>
      <button
        style={{ display: props.todo.completed ? "block" : "none" }}
        onClick={() => {
          props.deleteTodo(props.todo.id);
        }}
      >
        Delete Todo
      </button>
    </li>
  );
}
