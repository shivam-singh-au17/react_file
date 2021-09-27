import React, { useState } from "react";
import ThisChildForParent from "./ThisChildForParent";

export default function ParentChild() {
  const [counter, setCounter] = useState(0);
  //   const handleAdd = () => {setCounter(counter + 1);};
  //   const handleRemove = () => {setCounter(counter - 1);};
  return (
    <div className="container mt-5">
      <ThisChildForParent count={counter} />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
        className="btn btn-info m-2"
      >
        Add
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
        className="btn btn-info m-2"
      >
        Remove
      </button>
    </div>
  );
}
