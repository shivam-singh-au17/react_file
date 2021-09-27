import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import InputTodo from "./InputTodo";
import ListTodo from "./ListTodo";

export default function MyTodo() {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(true);

  const handelAddData = (title) => {
    const payLoad = {
      title: title,
      status: false,
      id: uuid(),
    };
    const newTask = [...data, payLoad];
    setData(newTask);
  };

  const handleToogle = (id) => {
    const updatedData = data.map((item) => {
      return item.id === id ? { ...item, status: !item.status } : item;
    });
    setData(updatedData);
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((item) => {
      return item.id !== id;
    });
    setData(updatedData);
  };

  return (
    <div className="container mt-4">
      <h1>Add Task Here</h1>
      <InputTodo handelClick={handelAddData} />
      <button className="btn btn-success mx-2" onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show Complited Todos" : "Show All Todos"}
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
          {data
            .filter((item) => (showAll ? true : item.status))
            .map((item) => {
              return (
                <ListTodo
                  handleToogle={handleToogle}
                  handleDelete={handleDelete}
                  key={item.id}
                  {...item}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
