import React from "react";

function MainLayout({ children }) {
  return (
    <div className="bg-[rgb(3, 3, 22)] min-h-screen flex flex-col items-center justify-center max-w-[900px]">
      <main>{children}</main>
    </div>
  );
}

export default MainLayout;
