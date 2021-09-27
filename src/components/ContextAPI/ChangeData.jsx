import React from "react";
import { useContext } from "react";
import { AuthContex } from "../../Contexts/AuthContex";

export default function ChangeData() {
  const {userLogin, handalLogin} = useContext(AuthContex);
  return userLogin ? (
    <div className="container mt-5">
      <h2>Auth is: {`${userLogin}`}</h2>
      <h2>Secret data is here</h2>
      <button onClick={handalLogin} className="btn btn-primary">
        Log Out
      </button>
    </div>
  ) : (
    <div className="container mt-5">
      <h3>User is not logged in. please login to open</h3>
      <button onClick={handalLogin} className="btn btn-primary">
        Login
      </button>
    </div>
  );
}
