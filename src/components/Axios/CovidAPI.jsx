import React from "react";
import axios from "axios";
import { useState } from "react";

export default function CovidAPI() {
  const [isLoaging, setIsLoaging] = useState(false);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState([]);

  const handleSearch = () => {
    setIsLoaging(true);
    setIsError(false);
    axios
      .get(
        "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=512&date=31-03-2021"
      )
      .then((res) => {
        setUsers(res.data.sessions);
      })
      .catch((err) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoaging(false);
      });
  };

  return (
    <div className="container bg-warning pt-4 pb-5 px-5 my-5 text-center">
      <h1 className=" text-light mb-3">
        <u>React - axios - Covid - API</u>
      </h1>
      <div className="d-flex">
        <button
          disabled={isLoaging}
          onClick={handleSearch}
          className="btn btn-success fs-5 me-4"
          type="submit"
        >
          {isLoaging ? "...Loading" : "CLICK HERE"}
        </button>
        <h1>To See Full Availability Of The COVID-19 Vaccine</h1>
      </div>
      {isError ? "PLEASE FILL IN TEXT" : null}
      <table className="table text-light mt-4">
        <thead className="bg-info">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Block Name</th>
            <th scope="col">Pin Code</th>
            <th scope="col">Available Capacity</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((item) => (
            <tr className="bg-danger" key={item.center_id}>
              <th> {item.name} </th>
              <td> {item.block_name} </td>
              <td> {item.pincode} </td>
              <td> {item.available_capacity} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
