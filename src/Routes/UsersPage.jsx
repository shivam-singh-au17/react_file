import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

const UsersPage = () => {
  const { userId } = useParams();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
 

  const getUsersDetailes = () => {
    axios
      .get(`https://reqres.in/api/users/${userId}`)
      .then((res) => {
        setUsers(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getUsersDetailes();
  }, []);


  const handleGoBack = (() => {
    // history.push("./");
    history.replace("./")
  })



  return isLoading ? (
    <div className="fs-1 text-info">....Loading</div>
  ) : (
    <div>
      <div style={{ width: "22rem", padding:"20px" }}>
        <img src={users.avatar} alt="..." />
        <div>
          <h3>{`${users.first_name} ${users.last_name}`}</h3>
          <h6>{users.email}</h6>
        </div>
        </div>
        <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export { UsersPage };
