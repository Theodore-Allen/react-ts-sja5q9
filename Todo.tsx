import * as React from 'react';

export default function Todo({ todoObj, StateChange }) {
  var today = new Date();

  var time = today.getHours() + ':' + today.getMinutes();
  var date =
    today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();

  let TimeLine: string = `Date: ${date} Time: ${time}`;
  let className: string = 'base notDone';
  if (todoObj.completed) {
    className = 'base done';
    TimeLine = `Completed: Date: ${date} Time: ${time}`;
  }
  function handleStateChange() {
    StateChange(todoObj.id);
  }

  return (
    // @ts-expect-error
    <>
      <div onClick={handleStateChange} className={className}>
        <h1>{todoObj.name}</h1>
        <p className="date">{TimeLine}</p>
      </div>
    </>
  );
}
