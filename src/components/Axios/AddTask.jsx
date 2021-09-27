import React, { useEffect, useState } from "react";
import OneItem from "./OneItem";
import axios from "axios";

export default function AddTask() {
  const [task, setTask] = useState("");
  const [isLoaging, setIsLoaging] = useState(false);
  const [isError, setIsError] = useState(false);
  const [addTask, setAddTask] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    getMyTodos();
  }, [pageNum]);

  function getMyTodos() {
    setIsLoaging(true);
    setIsError(false);
    axios
      .get(`http://localhost:3001/todos?_page=${pageNum}&_limit=5`)
      .then((res) => {
        setAddTask(res.data);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoaging(false);
      });
  }

  const handelChange = (e) => {
    const { value } = e.target;
    setTask(value);
  };

  const handelClick = () => {
    setIsLoaging(true);
    setIsError(false);
    axios
      .post("http://localhost:3001/todos", {
        title: task,
        status: false,
      })
      .then((res) => {
        getMyTodos();
      })
      .catch((error) => {
        setIsError(true);
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
        {isLoaging ? "...Loading Todos" : "Add Todos"}
      </button>
      {isError ? "PLEASE FILL IN TEXT" : null}
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
