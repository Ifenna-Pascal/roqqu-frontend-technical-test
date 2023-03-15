import React from "react";

function MainLayout({ children }) {
  return (
    <div className="bg-[#030316] min-h-screen flex flex-col items-center justify-center max-w-[900px]">
      <main>{children}</main>
    </div>
  );
}

export default MainLayout;
