import React, { useState } from "react";
import MultiForm from "./MultiForm";

export default function ConditionalRendering() {
  const [loding, setLoding] = useState(true);
  const [error, setError] = useState(false);


  const fetchDataYes = () => {
    setError(false);
    setLoding(false);
  };
  
  const fetchDataNo = () => {
    setError(true);
  };
  
  const fetchDataNoaGAIN = () => {
    setError(false);
  };

if (error) {
  return (
    <div className="container p-5 mt-5 bg-primary text-light">
      <h1>Some Thing Went Wrong</h1>
      <button onClick={fetchDataNoaGAIN} className="btn btn-success mt-2 m-2">
        Fetch Data Again
      </button>
    </div>
  );
}

  if (loding) {
    return (
      <div className="container p-5 mt-5 bg-primary text-light">
        <h1>....Loding Your Task</h1>
        <h2>Do You Have Your Login Information</h2>
        <button onClick={fetchDataYes} className="btn btn-success mt-2 m-2">
          If Yes Then Click Here
        </button>
        <button onClick={fetchDataNo} className="btn btn-danger mt-2 m-2">
          If No Then Click Here
        </button>
      </div>
    );
  } else {
    return (
      <div className="container mt-5 p-4 bg-info rounded">
        <MultiForm />
      </div>
    );
  }
  
}
