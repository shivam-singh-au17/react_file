import React from "react";

export default function OneItem({
  name,
  salary,
  contry,
  photo,
  department,
  isMarried,
  email,
  age,
  address,
  id,
  handleDelete
}) {
  return (
    <>
      <tr className="bg-success text-light text-center">
        <td>{name}</td>
        <td>{email}</td>
        <td>{age}</td>
        <td>{address}</td>
        <td>{salary}</td>
        <td>{`${isMarried}`}</td>
        <td>{contry}</td>
        <td>{department}</td>
        <td>{photo}</td>
        <td>
          <button onClick={() => handleDelete(id)} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
