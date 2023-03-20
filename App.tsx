import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './style.css';
import TodoList from './TodoList'
export default function App() {
 const [todos, setTodos] = React.useState([]);
 const input = React.useRef();

function handleSetTodo()
{
  // @ts-expect-error
  const name = input.current.value;
  if(name === '') return;

    setTodos( prev => {return [...prev, {id: uuidv4(), name: name, completed: false}]});
// @ts-expect-error
  input.current.value = null;
}

  return (
    <div>
      <input ref={input} type="text"/>
      <button onClick={handleSetTodo}>add Task</button>
      <TodoList todos={todos}/>
    </div>
  );
}
