import React from "react";

function Input({ name, placeholder, icon, title }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-gray-500">
        {title}
      </label>
    </div>
  );
}

export default Input;
