import { useEffect, useState } from "react";
import React from "react";

export default function SomeCounter() {
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    let temp = setInterval(() => {
      console.log("Calling is:", counter);
      setCounter((prev) => {
        if (prev === 1) {
          clearInterval(temp);
        }
        return prev - 1;
      });
    }, 1000);
      return () => {
        console.log("Unmounting Phase");
      clearInterval(temp);
    };
  }, []);

  return (
    <div>
      <h1>Count is {counter} </h1>
    </div>
  );
}
