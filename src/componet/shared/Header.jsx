import React from "react";

function Header({ header, content }) {
  return (
    <div className="flex flex-col">
      <h1 className="text-white font-bold text-[30px]">{header}</h1>
      <p className="text-[16px] py-[12px] text-gray-500">{content}</p>
    </div>
  );
}

export default Header;
