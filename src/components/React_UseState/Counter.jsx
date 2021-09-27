import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handelPlus = () => {
    setCount(count + 1);
  };
  const handelMinus = () => {
    setCount(count - 1);
  };
  return (
    <div className="container mt-3 text-center">
      <h2>This Is My Counter</h2>
      <div>
        <h1>{count}</h1>
      </div>
      <button onClick={handelPlus} className="btn btn-info m-2">
        Plus
      </button>
      <button onClick={handelMinus} className="btn btn-info m-2">
        Minus
      </button>
    </div>
  );
}
