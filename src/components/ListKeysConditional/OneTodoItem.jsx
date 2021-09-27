import React from "react";

export default function OneTodoItem({
  title,
  status,
  id,
  deleteFindId,
  updateFindId,
}) {
  const handleFindId = () => {
    deleteFindId(id);
  };

  const handleFindIdUpdate = () => {
    // TODO: FIXME:
    updateFindId(status);
  };

  return (
    <>
      <tr className="fs-4">
        <td>{`${title}`}</td>
        <td>{`${status}`}</td>
        <td>
          <button onClick={handleFindIdUpdate} className="btn btn-primary">
            Mark Done
          </button>
        </td>
        <td>
          <button onClick={handleFindId} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
