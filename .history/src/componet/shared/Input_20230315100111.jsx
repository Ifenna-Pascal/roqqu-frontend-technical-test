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
          placeholder={placeholder}
          className="bg-gray-800 border border-gray-300 p-3 rounded-[4px]"
        />
        <i
          className={`${icon} text-md top-[12px] mr-[8px] absolute left-[12px] text-gray-200`}
        />
      </div>
    </div>
  );
}

export default Input;
