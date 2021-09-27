import React, { useEffect } from "react";
import { useState } from "react";
import fetchUsers from "./fetchUsers";

export default function GitHubUsers() {
  const [query, setQuery] = useState("");
  const [isLoaging, setIsLoaging] = useState(false);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
     setIsLoaging(true);
     setIsError(false);
     fetchUsers("masai")
       .then((res) => {
         setUsers(res.data.items);
       })
       .catch((err) => {
         setIsError(true);
       })
       .finally(() => {
         setIsLoaging(false);
       });
     setQuery("");
  }, []);

  const handleSearch = () => {
    setIsLoaging(true);
    setIsError(false);
    fetchUsers(query)
      .then((res) => {
        setUsers(res.data.items);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoaging(false);
      });
    setQuery("");
  };

  return (
    <div className="container bg-dark pt-4 pb-5 px-5 my-5 text-center">
      <h1 className=" text-light mb-3">
        <u>React - axios - github API</u>
      </h1>
      <div className="d-flex">
        <input
          value={query}
          onChange={handleChange}
          className="form-control me-2 fs-5"
          type="search"
          placeholder="Search Here"
          aria-label="Search"
        />
        <button
          disabled={isLoaging}
          onClick={handleSearch}
          className="btn btn-outline-success fs-5"
          type="submit"
        >
          {isLoaging ? "Loading" : "SEARCH"}
        </button>
      </div>
      <div className="card text-center mt-3" style={{ width: "65.5rem" }}>
        <ul className="list-group fs-5 list-group-flush">
          {isError ? "PLEASE FILL IN TEXT" : null}
          {users?.map((item) => (
            <li
              className="list-group-item bg-primary m-1 fs-4 text-light"
              key={item.id}
            >
              {item.login.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
