import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function fetchUser() {
    fetch(`http://localhost:3002/UserData`)
      .then((data) => data.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchUser();
  }, []);

  const myStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "99vh",
  };

  return isLoading ? (
    <div style={myStyle}>
      <div className="display-1 text-danger fw-bold">....Loading</div>
    </div>
  ) : (
    <>
      <div className="container mt-4">
        <table
          className="table bg-dark text-light text-center fs-4"
          style={{ width: "auto" }}
        >
          <thead>
            <tr>
              <th style={{ width: "300px" }}>Id</th>
              <th style={{ width: "300px" }}>Name</th>
              <th style={{ width: "300px" }}>Price</th>
              <th style={{ width: "300px" }}>Details</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => {
              return (
                <tr key={item.id} className="fs-4">
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <Link
                      to={`/users/${item.id}`}
                      className="btn fs-4 btn-info text-light"
                    >
                      More Details
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={`p-1 text-center bg-dark fs-4 mt-3 text-light`}>
        @ Shivam Singh 2021
      </div>
    </>
  );
};

export { AllProducts };
