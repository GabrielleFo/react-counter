import React from "react";

const Button = ({ counter, setCounter }) => {
  return (
    <button
      onClick={() => {
        setCounter((counter = 0));
      }}
    >
      Reset
    </button>
  );
};

export default Button;
