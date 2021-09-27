import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const UsersPage = () => {
  const { userId } = useParams();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function getUsersDetailes() {
    fetch(`http://localhost:3002/UserData/${userId}`)
      .then((data) => data.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getUsersDetailes();
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
    <div className="container mt-5">
      <div className="card bg-dark">
        <img
          src={users.img}
          style={{ width: "100%", height: "520px" }}
          className="card-img"
          alt="eroor"
        />
        <div className="card-img-overlay">
          <p className="card-title text-dark display-1">{users.name}</p>
          <p className="card-text text-dark fs-3">{users.info}</p>
          <p className="card-text text-dark display-4">{`Price: ${users.price}`}</p>
        </div>
      </div>
    </div>
  );
};

export { UsersPage };
