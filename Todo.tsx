import * as React from 'react';

export default function Todo({ todoObj, StateChange }) {
  let className: string = 'base notDone';
  if (todoObj.completed) {
    className = 'base done';
  }
    function handleStateChange()
    {
      StateChange(todoObj.id);
    }
  return (
    // @ts-expect-error
    <>
      <div onClick={handleStateChange} className= {className}>
        <h1>{todoObj.name}</h1>
        <p>Key: {todoObj.id}</p>
      </div>
    </>
  );
}
