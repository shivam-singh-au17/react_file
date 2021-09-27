import React, { useEffect, useState } from "react";
import OneItem from "./OneItem";

export default function AddTask() {
  const [task, setTask] = useState("");
  const [addTask, setAddTask] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  function getMyTodos() {
    fetch(`http://localhost:3001/todos?_page=${pageNum}&_limit=5`)
      .then((data) => data.json())
      .then((data) => {
        setAddTask(data);
      });
  }

  useEffect(() => {
    getMyTodos();
  }, [pageNum]);

  const handelChange = (e) => {
    const { value } = e.target;
    setTask(value);
  };

  const handelClick = () => {
    const payLoad = {
      title: task,
      status: false,
    };
    fetch("http://localhost:3001/todos", {
      method: "POST",
      body: JSON.stringify(payLoad),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      getMyTodos();
    });
    setTask("");
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "DELETE",
    }).then(() => {
      getMyTodos();
    });
  };

  const handleUpdate = (id) => {
    const updatedData = addTask.map((item) => {
      return item.id === id ? { ...item, status: !item.status } : item;
    });
    setAddTask(updatedData);
  };

  return (
    <div className="container mt-4 bg-info p-4">
      <h1>Add Task Here</h1>
      <input
        className="form-control"
        value={task}
        onChange={handelChange}
        type="text"
      />
      <button onClick={handelClick} className="btn btn-warning m-2">
        Add Todos
      </button>
      <table className="table">
        <thead className="bg-dark text-light">
          <tr>
            <th>Task</th>
            <th>Status</th>
            <th>Mark Done</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {addTask.map((item) => {
            return (
              <OneItem
                key={item.id}
                {...item}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              />
            );
          })}
        </tbody>
      </table>
      <button
        onClick={() => {
          setPageNum(pageNum - 1);
        }}
        className="btn btn-dark m-2"
      >
        Prev Page
      </button>
      <button
        onClick={() => {
          setPageNum(pageNum + 1);
        }}
        className="btn btn-dark m-2"
      >
        Next Page
      </button>
    </div>
  );
}
