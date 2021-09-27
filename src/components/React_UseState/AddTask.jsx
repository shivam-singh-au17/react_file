import React, { useState } from "react";
import OneItem from "./OneItem";
import { v4 as uuid } from "uuid";

export default function AddTask() {
  const [task, setTask] = useState("");
  const [addTask, setAddTask] = useState([]);

  const handelChange = (e) => {
    const { value } = e.target;
    setTask(value);
  };

  const handelClick = () => {
    const payLoad = {
      title: task,
      status: false,
      id: uuid(),
    };
    const newTask = [...addTask, payLoad];
    setAddTask(newTask);
    setTask("");
  };
  return (
    <div className="container">
      <h1>Add Task Here</h1>
      <input value={task} onChange={handelChange} type="text" />
      <button onClick={handelClick} className="btn btn-warning m-2">
        Add
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Mark Done</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {addTask.map((item, i) => {
            return (
              <OneItem key={uuid} {...item} color={i % 2 === 0 ? "green" : "blue"} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
