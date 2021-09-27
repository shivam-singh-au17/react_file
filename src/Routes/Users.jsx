import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = () => {
    axios
      .get("https://reqres.in/api/users")
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
    fetchUser();
  }, []);

  return isLoading ? (
    <div className="fs-1 text-info">....Loading</div>
  ) : (
    <>
      <p className="mt-3 ms-2 display-1">This Is Users Page</p>
      {users.map((item) => {
        return (
          <Link key={item.id} className="mx-2 fs-4 py-2 px-3 bg-warning text-light" to={`/users/${item.id}`}>
            {`${item.first_name} ${item.last_name}`}
          </Link>
        );
      })}
    </>
  );
};

export { Users };
