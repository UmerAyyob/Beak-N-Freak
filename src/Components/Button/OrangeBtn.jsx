import React from "react";
function OrangeBtn({ children, className, handleClick }) {
  return (
    <button
      onClick={handleClick}
      className={`bg-buttonColor font-poppins text-white px-6 py-2 rounded-lg shadow-md hover:bg-orange-500 ${className}`}
    >
      {children}
    </button>
  );
}

export default OrangeBtn;
