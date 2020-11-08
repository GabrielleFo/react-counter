import React from "react";

const Button = ({ counter, setCounter }) => {
  return (
    <button
      onClick={() => {
        setCounter(counter + 1);
      }}
    >
      +
    </button>
  );
};

export default Button;
