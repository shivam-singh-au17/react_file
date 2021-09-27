import React from "react";

export default function OneItem({ title, status, color }) {
  return (
    <>
      <tr className="fs-4" style={{ color }}>
        <td>{`${title}`}</td>
        <td>{`${status}`}</td>
        <td>
          <button className="btn btn-primary">Mark Done</button>
        </td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    </>
  );
}
