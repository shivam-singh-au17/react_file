import React, { useState } from "react";
import SiblingsChild2 from "./SiblingsChild2";
import SiblingsChind1 from "./SiblingsChind1";

export default function ChildParent() {
  const [counter, setCounter] = useState(0);

  const handleChange = (value) => {
    setCounter(counter + value);
  };

  return (
    <div className="container mt-5">
      <h1>Here Is My Siblings Counter</h1>
      <SiblingsChind1 value={counter} />
      <SiblingsChild2 btnName="Add" functionName={() => handleChange(1)} />
      <SiblingsChild2 btnName="Remove" functionName={() => handleChange(-1)} />
    </div>
  );
}
