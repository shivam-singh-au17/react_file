import React, { useState } from "react";

export default function InputTodo({ handelClick }) {
  const [title, setTitle] = useState("");
  return (
    <>
      <input
        className="form-control"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
      />
      <button
        onClick={() => handelClick(title)}
        className="btn btn-warning my-4 me-2"
      >
        Add To Dos
      </button>
    </>
  );
}
