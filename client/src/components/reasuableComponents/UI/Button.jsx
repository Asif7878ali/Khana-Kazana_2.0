import React from "react";

export const Button = ({ variant = "primary", children, className = "", ...props }) => {
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


export const BlurButton = ({
 name = "",
 className ="",
 onClick
}) => {
  return (
      <button className={`absolute text-white font-medium border-2 border-white 
             backdrop-blur-xs bg-white/10 px-6 py-2 rounded-xl cursor-pointer
             hover:scale-105 hover:bg-white/20 transition-all duration-300 ease-in-out
             shadow-lg hover:shadow-2xl animate-fade-in ${className}`} onClick={onClick}>
  {name}
</button>
  )
}

