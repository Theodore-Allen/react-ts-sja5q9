import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoList from './TodoList';
export default function App() {
  const [todos, setTodos] = React.useState([]);
  const input = React.useRef();

  function handleSetTodo() {
    // @ts-expect-error
    const name = input.current.value;
    if (name === '') return;

    setTodos((prev) => {
      return [...prev, { id: uuidv4(), name: name, completed: false }];
    });
    // @ts-expect-error
    input.current.value = null;
  }

  function StateChange(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  return (
    <div>
      <div className="input">
        <input ref={input} type="text" />
        <button onClick={handleSetTodo}>add Task</button>
        <span>
          {todos.filter((todo) => todo.completed === true).length} Done
        </span>
      </div>
      <TodoList StateChange={StateChange} todos={todos} />
    </div>
  );
}
