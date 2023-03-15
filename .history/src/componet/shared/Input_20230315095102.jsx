import React from "react";

function Input({ name, placeholder, icon, title, type }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-gray-500 mb-2">
        {title}
      </label>
      <div className="w-full mb-4 relative">
        <input
          type={type}
          name={name}
          className="bg-gray-800 border border-gray-300 p-4 rounded-[4px]"
        />
        <i className={`${icon} text-xl absolute left-[8px] text-gray-200`} />
      </div>
    </div>
  );
}

export default Input;
