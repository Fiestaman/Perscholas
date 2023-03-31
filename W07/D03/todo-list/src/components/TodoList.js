import Todo from "./Todo";

export default function TodoList(props) {
  const notCompleted = props.todos
    .filter((todo) => !todo.completed)
    .map((todo) => {
      return (
        <Todo
          todo={todo}
          completeTodo={props.completeTodo}
          editTodoText={props.editTodoText}
          deleteTodo={props.deleteTodo}
        />
      );
    });

  const completed = props.todos
    .filter((todo) => todo.completed)
    .map((todo) => {
      return (
        <Todo
          todo={todo}
          completeTodo={props.completeTodo}
          editTodoText={props.editTodoText}
          deleteTodo={props.deleteTodo}
        />
      );
    });

  return (
    <>
      <h1>Create Todo</h1>
      <input
        type="text"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            props.addTodo(e);
          }
        }}
      />
      {props.todos.length ? (
        <>
          <h1>Todo Items</h1>
          <ul className="todoList">{notCompleted}</ul>
          <h1>Completed Items</h1>
          <ul className="todoList">{completed}</ul>
        </>
      ) : (
        <h1>No Todos Added Yet</h1>
      )}
    </>
  );
}
