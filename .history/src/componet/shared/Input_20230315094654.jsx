import React from "react";

function Input({ name, placeholder, icon, title }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}></label>
    </div>
  );
}

export default Input;
