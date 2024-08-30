import React from "react";

const Button = ({ children, classNames }) => {
  return (
    <button
      className={`btnanimate rounded-lg text-xl  bg-primary-500 text-primary-white   ${classNames}`}
    >
      {children}
    </button>
  );
};

export default Button;
