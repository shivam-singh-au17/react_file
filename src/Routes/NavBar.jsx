import React from "react";
import { Link } from "react-router-dom";

const links = [
  {
    to: "/",
    title: "Home",
  },
  {
    to: "/about",
    title: "About",
  },
  {
    to: "/users",
    title: "Users",
  },
  {
    to: "/contect",
    title: "Contect",
  },
  {
    to: "/login",
    title: "Login",
  },
];
const NavBar = function () {
  return (
    <div className="container mt-5">
      {links.map(({ to, title }, i) => {
        return (
          <Link
            key={i}
            className="me-3 fs-4 text-light py-2 px-3 bg-danger"
            to={to}
          >
            {title}
          </Link>
        );
      })}
    </div>
  );
};

export { NavBar };
