import React from "react";

export const Button = (input) => {
  const buttonClick = () => {
    console.log("click");
  };
  return (
    <button onClick={buttonClick} className="ui button">
      Click Here
    </button>
  );
};
