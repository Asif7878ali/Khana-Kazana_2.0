import React from "react";

const Button = ({ variant = "primary", children, className = "", ...props }) => {
  const baseStyles = "px-4 py-2 rounded-lg font-medium transition duration-200 ease-in-out transform active:scale-95 cursor-pointer";

  const variants = {
    primary: "bg-rose-600 text-white hover:bg-rose-700 hover:shadow-lg",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 hover:shadow-lg",
    outline: "border border-rose-500 text-gray-600 hover:shadow-md",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
