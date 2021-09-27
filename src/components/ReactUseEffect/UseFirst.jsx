import React, { useEffect, useState } from "react";

export default function UseFirst() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    let id = setInterval(() => {
      setCount((prev) => {
        if (prev === 0) {
          clearInterval(id);
          return prev;
        } else {
          return prev - 1;
        }
      });
    }, 1000);
      return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div className="container mt-4">
      <h1>Counter Is Here</h1>
      <h2>
        Count is: <span>{count}</span>
      </h2>
    </div>
  );
}
