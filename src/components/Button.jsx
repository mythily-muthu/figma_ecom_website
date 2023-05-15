import React from "react";

const Button = ({
  name,
  bgColor = "bg-primary",
  textColor = "text-white",
  click,
  width = "w-max",
}) => {
  return (
    <button
      className={`h-12 px-23px py-13px ${bgColor} ${width} ${textColor} rounded-lg`}
      onClick={click}
    >
      {name}
    </button>
  );
};

export default Button;
