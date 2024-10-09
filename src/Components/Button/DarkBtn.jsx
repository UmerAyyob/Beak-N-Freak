import React from "react";

function DarkBtn({ children, className }) {
  return (
    <button
      className={`bg-transparent font-poppins border-2 border-heading text-heading px-6 py-2 rounded-lg shadow-md hover:bg-heading hover:text-white transition-all ${className}`}
    >
      {children}
    </button>
  );
}

export default DarkBtn;
