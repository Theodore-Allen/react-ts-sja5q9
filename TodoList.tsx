import * as React from 'react';
import Todo from './Todo';
export default function TodoList({ todos, StateChange, Delete }) {

  return todos.map((todo) => {
    return <Todo Delete={Delete} key={todo.id} StateChange={StateChange} todoObj={todo} />;
  });
}
