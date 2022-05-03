import React from "react";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>oops wrong page...⁉️</h1>
      <button onClick={clickHandler}>Back Home Page 😀</button>
    </div>
  );
};

export default Error;
