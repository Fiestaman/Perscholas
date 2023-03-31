// import "./styles.css";
// import { useState, useEffect } from "react";
// import TodoList from "./components/TodoList";

// export default function App() {
//   //   const arr = [
//   //     {
//   //       text: "Blah",
//   //       completed: true,
//   //     },
//   //     {
//   //       text: "Blah3",
//   //       completed: false,
//   //     },
//   //     {
//   //       text: "Blah1",
//   //       completed: true,
//   //     },
//   //     {
//   //       text: "blah7",
//   //       completed: false,
//   //     },
//   //     {
//   //       text: "blah2",
//   //       completed: false,
//   //     },
//   //   ];

//   const [todos, setTodos] = useState([]);
//   // Creating a new Todo obj
//   const addTodo = (e) => {
//     const newTodo = {
//       // Assigning text key to user input
//       text: e.target.value,
//       completed: false,
//       // Creating an unique identifier with Date.now()
//       id: Date.now(),
//     };
//     // setting todos state, to a copy of the current todos arr and adding the newTodo to the beginning
//     setTodos([newTodo, ...todos]);
//   };

//   return (
//     <div className="App">
//       <TodoList todos={todos} addTodos={addTodo} />
//     </div>
//   );
// }

import "./styles.css";
import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos && savedTodos !== "undefined" && savedTodos !== "null") {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  const addTodo = (e) => {
    // Creating a new Todo obj
    const newTodo = {
      // assigning text key to user input
      text: e.target.value,
      completed: false,
      // Creating an unique identifier with Date.now() (nothing to do with the date, just using because it's unique)
      id: Date.now(),
    };
    // setting todos state, to a copy of the current todos arr and adding the newTodo to the beginning
    setTodos([newTodo, ...todos]);
    localStorage.setItem("todos", JSON.stringify([newTodo, ...todos]));
    e.target.value = "";
  };

  const completeTodo = (id) => {
    const todosCopy = [...todos];
    const indexOfTodo = todosCopy.findIndex((todo) => todo.id === id);
    todosCopy[indexOfTodo].completed = !todosCopy[indexOfTodo].completed;
    localStorage.setItem("todos", JSON.stringify([...todosCopy]));
    setTodos(todosCopy);
  };

  const editTodoText = (id, e) => {
    const todosCopy = [...todos];
    const indexOfTodo = todosCopy.findIndex((todo) => todo.id === id);
    todosCopy[indexOfTodo].text = e.target.value;
    localStorage.setItem("todos", JSON.stringify([...todosCopy]));
    setTodos(todosCopy);
    e.target.value = "";
  };

  const deleteTodo = (id) => {
    const todosCopy = [...todos];
    const indexOfTodo = todosCopy.findIndex((todo) => todo.id === id);
    todosCopy.splice(indexOfTodo, 1);
    localStorage.setItem("todos", JSON.stringify([...todosCopy]));
    setTodos(todosCopy);
  };

  return (
    <div className="App">
      <TodoList
        todos={todos}
        addTodo={addTodo}
        completeTodo={completeTodo}
        editTodoText={editTodoText}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}
