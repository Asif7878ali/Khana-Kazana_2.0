import React from "react";

const RadioButton = ({
  id,
  name,
  value,
  checked,
  onChange,
  label,
  disabled = false,
  className = "",
  labelClassName = ""
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <label 
        htmlFor={id}
        className={`group ${checked ? "border border-rose-500 bg-rose-50" : "border border-zinc-500"}  p-3 rounded-lg flex items-center gap-2 ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
      >
        {/* Custom radio container */}
        <div className="relative w-5 h-5">
          {/* Outer circle */}
          <div className={`
            absolute inset-0 rounded-full border-2 transition-all duration-200
            ${checked ? 'border-red-600' : 'border-gray-300 group-hover:border-red-400'}
            ${disabled ? 'border-gray-400' : ''}
          `}></div>
          
          {/* Animated inner circle */}
          {checked && (
            <div className={`
              absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
              w-3 h-3 rounded-full bg-red-600
              animate-[scaleIn_0.2s_ease-in-out]
              ${disabled ? 'bg-gray-500' : ''}
            `}></div>
          )}
        </div>
        
        {/* Hidden native input */}
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="sr-only"
        />
        
        {/* Optional label */}
        {label && (
          <span className={`${checked ? "text-red-700" : "text-gray-700"}  ${labelClassName}`}>
            {label}
          </span>
        )}
      </label>
    </div>
  );
};


export default RadioButton;