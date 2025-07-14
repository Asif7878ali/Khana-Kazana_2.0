import React from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  return (
    <div className={`  fixed inset-0 z-50 flex items-center justify-center transition-all duration-300
        ${isOpen ? 'backdrop-blur-sm bg-transparent bg-opacity-30 visible opacity-100' : 'opacity-0 invisible'}
      `}>
      <div className={`   bg-white rounded-lg shadow-lg w-full max-w-md relative transform transition-all duration-300
          ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
        `}>
        
        <div className="flex justify-between items-center px-4 py-2 border-b">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-2xl font-bold cursor-pointer"
          >
            &times;
          </button>
        </div>

        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
