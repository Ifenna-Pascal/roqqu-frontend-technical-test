import React from "react";

function MainLayout({ children }) {
  return (
    <div className="bg-[#030316] w-full flex flex-col  ">
      <div className="min-h-screen flex flex-col mx-auto items-center justify-center max-w-[900px]">
        <main>{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;
