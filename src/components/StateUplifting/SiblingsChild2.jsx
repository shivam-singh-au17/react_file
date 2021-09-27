import React from "react";

export default function SiblingsChild2({ btnName, functionName }) {
  return (
    <>
      <button className="btn btn-info m-2" onClick={functionName}>{btnName}</button>
    </>
  );
}
