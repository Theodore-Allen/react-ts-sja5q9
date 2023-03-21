import * as React from 'react';
import Todo from './Todo';
export default function TodoList({ todos, StateChange }) {

  return todos.map((todo) => {
    return <Todo key={todo.id} StateChange={StateChange} todoObj={todo} />;
  });
}
