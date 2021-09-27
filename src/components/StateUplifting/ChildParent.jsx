// import React, { useState } from 'react'
// import ChildToParent from "./ChildToParent";

// export default function ChildParent() {
//     const [counter, setCounter] = useState(0);

//     const handleAdd = ((value) => {
//         setCounter(value + 1);
//     });

//     const handleRemove = ((value) => {
//       setCounter(value - 1);
//     });

//     return (
//       <div className="container mt-5">
//         <h1>Here Is My Counter</h1>
//         <ChildToParent
//           value={counter}
//           handleAdd={handleAdd}
//           handleRemove={handleRemove}
//         />
//       </div>
//     );
// }

import React, { useState } from "react";
import ChildToParent from "./ChildToParent";

export default function ChildParent() {
  const [counter, setCounter] = useState(0);

  const handleChange = (value) => {
    setCounter(counter + value);
  };

  return (
    <div className="container mt-5">
      <h1>Here Is My Counter</h1>
      <ChildToParent
        value={counter}
        handleAdd={() => handleChange(1)}
        handleRemove={() => handleChange(-1)}
      />
    </div>
  );
}
