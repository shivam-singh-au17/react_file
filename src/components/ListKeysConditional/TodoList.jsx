import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import OneTodoItem from "./OneTodoItem";

export default function TodoList() {
  const [query, setQuery] = useState("");
  const [addTask, setAddTask] = useState([]);
  // const [taskStatus, setTaskStatus] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  const handleClick = () => {
    const payLoad = {
      title: query,
      status: false,
      id: uuid(),
    };
    const newTask = [...addTask, payLoad];
    setAddTask(newTask);
    setQuery("");
  };

  const deleteFindId = (id) => {
    const updatedList = addTask.filter((item) => {
      return item.id !== id;
    });
    setAddTask(updatedList);
  };

  const updateFindId = (id) => {
    // TODO: FIXME:
    // const updatedList = addTask.map((item) => {
    //   return item.status ? false : true;
    // });
    // setAddTask(updatedList);
  };

  return (
    <div className="container mt-3">
      <h1>My TODO List</h1>
      <input
        value={query}
        onChange={handleChange}
        type="text"
        className="form-control"
        placeholder="Enter Your Item Here"
      />
      <button onClick={handleClick} className="btn btn-info my-3">
        Add Item
      </button>
      <div className="mb-3">
        <span className="fs-2">Count : </span>
        <span className="fs-2 bg-warning px-2">{addTask.length}</span>
      </div>
      <table className="table bg-success text-warning">
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Mark Done</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="bg-dark text-light">
          {addTask.map((item) => {
            return (
              <OneTodoItem
                key={item.id}
                deleteFindId={deleteFindId}
                updateFindId={updateFindId}
                {...item}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
