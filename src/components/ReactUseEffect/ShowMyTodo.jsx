import React from 'react'
import { useState } from 'react';
import AddTask from './AddTask';

export default function ShowMyTodo() {
  const [authCondition, setAuthCondition] = useState(false);
  const [authError, setAuthError] = useState(false);
  const handleAuth = () => {
    setAuthCondition(true);
  };
  const handleAuthError = () => {
    setAuthError(true);
  };
  if (!authCondition) {
    return (
      <div className="container mt-5">
        <p className="h1">You Have To First Login</p>
        <button onClick={handleAuth} className="btn btn-info">
          Click Here
        </button>
      </div>
    );
  }
  if (!authError) {
    return (
      <div className="container mt-5">
        <p className="h1">...Loding Plase Wait Or Click Below</p>
        <button onClick={handleAuthError} className="btn btn-primary">
          Click Here
        </button>
      </div>
    );
  }
  return (
    <>
      <AddTask/>
    </>
  );
}

