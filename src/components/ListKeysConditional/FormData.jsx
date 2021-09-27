import React, { useState } from "react";

const intinoalState = {
  firstName: "",
  lastName: "",
  userEmail: "",
  userCity: "",
};

export default function FormData() {
  const [query, setQuery] = useState(intinoalState);
  const { firstName, lastName, userEmail, userCity } = query;

  const handleAllData = (e) => {
    const { name, value } = e.target;
    setQuery({ ...query, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    setQuery(intinoalState);
  };

  return (
    <div className="container my-5 p-5 bg-secondary text-light">
      <h1>Form Data</h1>

      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-6">
          <label className="form-label">First name</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleAllData}
            className="form-control"
          />
        </div>

        <div className="col-6">
          <label htmlFor="data2" className="form-label">
            Last name
          </label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleAllData}
            className="form-control"
          />
        </div>

        <div className="col-6">
          <label htmlFor="data2" className="form-label">
            User Email
          </label>
          <input
            type="text"
            name="userEmail"
            value={userEmail}
            onChange={handleAllData}
            className="form-control"
          />
        </div>

        <div className="col-6">
          <label htmlFor="data2" className="form-label">
            User City
          </label>
          <input
            type="text"
            name="userCity"
            value={userCity}
            onChange={handleAllData}
            className="form-control"
          />
        </div>

        <div className="col-6">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
}
