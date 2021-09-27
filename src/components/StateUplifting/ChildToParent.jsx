// import React from "react";

// export default function ChildParent({ value, handleAdd, handleRemove }) {
//   const addFunCount = (() => {
//     handleAdd(value);
//   })
//   const removFunCount = (() => {
//     handleRemove(value);
//   })
//   return (
//     <div>
//       <>
//         <h2>
//           Count is: <span>{value}</span>
//         </h2>
//         <button onClick={addFunCount} className="btn btn-info m-2">
//           Add
//         </button>
//         <button onClick={removFunCount} className="btn btn-info m-2">
//           Remove
//         </button>
//       </>
//     </div>
//   );
// }






import React from "react";

export default function ChildParent({ value, handleAdd, handleRemove }) {
  return (
    <div>
      <>
        <h2>
          Count is: <span>{value}</span>
        </h2>
        <button onClick={handleAdd} className="btn btn-info m-2">
          Add
        </button>
        <button onClick={handleRemove} className="btn btn-info m-2">
          Remove
        </button>
      </>
    </div>
  );
}
