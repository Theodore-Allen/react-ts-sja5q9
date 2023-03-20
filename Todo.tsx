import * as React from 'react';

export default function Todo({ todoObj }) {
  
  let clss: "notDone";
  
  return (
    // @ts-expect-error
    <>
      <div className={class}>
        <h1>{todoObj.name}</h1>
       <p>Key: {todoObj.id}</p>
      </div>
    </>
  );
}
