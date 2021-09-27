import React from "react";
import { useEffect, useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [age, setAge] = useState(0);

  console.log("Before UseEffact");

  useEffect(() => {
    console.log("I am mounting");
  }, [counter]);

  useEffect(() => {
    console.log("I am Age");
  }, [age]);

  useEffect(() => {
    console.log("Empty Arry");
  }, []);

  console.log("After UseEffact");

  return (
    <div>
      <h1>My Count: {counter}</h1>
      <h1>My Count: {age}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Count
      </button>
      <button
        onClick={() => {
          setAge(Math.random());
        }}
      >
        Age
      </button>
    </div>
  );
}
