import React from "react";

export default function ListTodo({ title, status, id, handleToogle, handleDelete }) {
  return (
    <>
      <tr className="fs-4">
        {status ? (
          <td style={{ textDecoration: "line-through" }}>{title}</td>
        ) : (
          <td>{title}</td>
        )}
        <td>{`${status}`}</td>
        <td>
          <button onClick={() => handleToogle(id)} className="btn btn-info">
            {status ? "Done" : "MARK DONE"}
          </button>
        </td>
        <td>
          <button onClick={() => handleDelete(id)} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
