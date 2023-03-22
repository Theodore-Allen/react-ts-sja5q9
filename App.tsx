import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoList from './TodoList';
export default function App() {
  const [todos, setTodos] = React.useState([]);
  const [doneTodos, setDoneTodos] = React.useState([]);
  const input = React.useRef();
  window.addEventListener('keyDown', (e) => {console.log(e)})

  function keyPressed(code: string) {
    var temp: boolean = false;
    window.addEventListener('keyDown', (e) => {
      console.log(e);
      if (e.code === code) {
        temp = true;
      }
    });

    console.log(temp);
    return temp;
  }
  function handleDeleteTodo(id) {
    const newTodos = [...todos, ...doneTodos];
    const DoneTodos = newTodos.filter(
      (todo) => todo.completed === true && todo.id != id
    );
    const NotDoneTodos = newTodos.filter(
      (todo) => todo.completed === false && todo.id != id
    );
    setTodos(NotDoneTodos);
    setDoneTodos(DoneTodos);
  }
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
    if (keyPressed('Enter')) {
      console.log(' enter was clicked');
    }
    const newTodos = [...todos, ...doneTodos];
    const todo = newTodos.find((todo) => todo.id === id);

    todo.completed = !todo.completed;
    const DoneTodos = newTodos.filter((todo) => todo.completed === true);
    const NotDoneTodos = newTodos.filter((todo) => todo.completed === false);
    setTodos(NotDoneTodos);
    setDoneTodos(DoneTodos);
  }

  return (
    <div>
      <div  className="input">
        <input
          onKeyUp={(e) => {
            if (e.code === 'Enter') {
              handleSetTodo();
            }
          }}
          ref={input}
          type="text"
        />
        <button onClick={handleSetTodo}>add Task</button>
        <span>{doneTodos.length} Done</span>
      </div>
      <div className="todos">
        <h2>Not Done</h2>
        <TodoList StateChange={StateChange} todos={todos} />
      </div>

      <div className="doneTodos">
        <h2>Done</h2>
        <TodoList StateChange={StateChange} todos={doneTodos} />
      </div>
    </div>
  );
}
