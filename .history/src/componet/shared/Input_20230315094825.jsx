import React from "react";

function Input({ name, placeholder, icon, title, type }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-gray-500 mb-2">
        {title}
      </label>
      <div className="w-full mb-4 relative">
        <input type= />    
     </div>
    </div>
  );
}

export default Input;
