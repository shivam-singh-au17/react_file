import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContex } from "../../Contexts/ReactRoutingV5II/AuthContex";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { isAuth, handalLogin } = useContext(AuthContex);

  const handleSubmit = (e) => {
    e.preventDefault();
    handalLogin({ username, password });
  };

  return !isAuth ? (
    <div>
      <form className="form-control mt-5" onSubmit={handleSubmit}>
        <label className="fs-5">Email</label>
        <input
          className="form-control"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Enter Your Email"
        />
        <label className="fs-5">Password</label>
        <input
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Enter Your Password"
        />
        <input className="btn my-3 btn-info" type="submit" />
      </form>
    </div>
  ) : (
    <Redirect to="/users" />
  );
};

export { Login };
