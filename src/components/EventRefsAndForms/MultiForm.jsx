import React, { useEffect, useState } from "react";
import OneItem from "./OneItem";

const iniState = {
  name: "",
  email: "",
  age: "",
  address: "",
  salary: "",
  isMarried: false,
  contry: "",
  department: "",
  photo: "",
};

export default function MultiForm() {
  const [data, setData] = useState(iniState);
  const [addTask, setAddTask] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    getMyTodos();
  }, [pageNum]);

  function getMyTodos() {
    fetch(`http://localhost:3001/myForm?_page=${pageNum}&_limit=5`)
      .then((dataJson) => dataJson.json())
      .then((dataJson) => {
        setAddTask(dataJson);
      });
  }

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/myForm/${id}`, {
      method: "DELETE",
    }).then(() => {
      getMyTodos();
    });
  };

  const handleChang = (e) => {
    const { name, value, type, checked } = e.target;
    const myAllUserData = {
      ...data,
      [name]: type === "checkbox" ? checked : value,
    };
    setData(myAllUserData);
  };

  const handleClick = () => {
    fetch("http://localhost:3001/myForm", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      getMyTodos();
    });
    setData(iniState);
  };

  

  const sortMyAllData = () => {
   let newDataSort = addTask.sort((a, b) => {
     if (a.name < b.name) return -1;
     return a.name > b.name ? 1 : 0;
   });
    setAddTask(newDataSort);
    console.log(newDataSort);
  };

  const {
    name,
    email,
    age,
    isMarried,
    contry,
    address,
    salary,
    department,
    photo,
  } = data;

  return (
    <div>
      <h1>Events, useRef, Forms and more</h1>
      <div className="mb-2 fs-5">
        <label className="form-label">User Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Your Name"
          value={name}
          name="name"
          onChange={handleChang}
        />
      </div>
      <div className="row fs-5">
        <div className="mb-2 me-4 col">
          <label className="form-label">User Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Email"
            value={email}
            name="email"
            onChange={handleChang}
          />
        </div>
        <div className="mb-2 me-4  col fs-5">
          <label className="form-label">User Age</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Age"
            value={age}
            name="age"
            onChange={handleChang}
          />
        </div>
        <div className="mb-2  col fs-5">
          <label className="form-label">Is Married</label>
          <input
            type="checkbox"
            className="form-check-input form-control"
            value={isMarried}
            name="isMarried"
            onChange={handleChang}
          />
        </div>
      </div>
      <div className="row fs-5">
        <div className="mb-2 me-4 col">
          <label className="form-label">User Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Address"
            value={address}
            name="address"
            onChange={handleChang}
          />
        </div>
        <div className="mb-2 me-4  col">
          <label className="form-label">User Salary</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Salary"
            value={salary}
            name="salary"
            onChange={handleChang}
          />
        </div>

        <div className="mb-2  col">
          <label className="form-label">User Photo</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Photo URL"
            value={photo}
            name="photo"
            onChange={handleChang}
          />
        </div>
      </div>
      <div className="my-4 d-flex">
        <select
          onChange={handleChang}
          value={contry}
          className="form-select me-3"
          name="contry"
        >
          <option defaultValue>Select Contry</option>
          <option value="Mir">Mirzapur</option>
          <option value="Ban">Banaras</option>
          <option value="Rob">Robertsganj</option>
        </select>
        <select
          onChange={handleChang}
          value={department}
          className="form-select"
          name="department"
        >
          <option defaultValue>Select Department</option>
          <option value="FE">Front-End Devloper</option>
          <option value="BE">Back-End Devloper</option>
          <option value="FS">Full Stack Devloper</option>
        </select>
      </div>
      <div className="col-12 mb-2">
        <button type="submit" onClick={handleClick} className="btn btn-primary">
          Sign in
        </button>
      </div>

      <table className="table text-center mt-3">
        <thead className="bg-dark text-light">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Address</th>
            <th>Salary</th>
            <th>IsMarried</th>
            <th>Contry</th>
            <th>Department</th>
            <th>Photo</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {addTask.map((item) => {
            return (
              <OneItem key={item.id} {...item} handleDelete={handleDelete} />
            );
          })}
        </tbody>
      </table>
      <button onClick={sortMyAllData} className="btn btn-warning mx-2">
        Sort By Salary
      </button>
      <div className="d-flex flex-row-reverse">
        <button
          onClick={() => {
            setPageNum(pageNum + 1);
          }}
          className="btn btn-dark mx-2"
        >
          Next Page
        </button>
        <button
          onClick={() => {
            setPageNum(pageNum - 1);
          }}
          className="btn btn-dark me-2"
        >
          Prev Page
        </button>
      </div>
    </div>
  );
}
