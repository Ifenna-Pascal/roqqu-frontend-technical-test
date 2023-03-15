import React from "react";

function MainLayout({ children }) {
  return (
    <div className="bg-[rgb(3, 3, 22)]">
      <main>{children}</main>
    </div>
  );
}

export default MainLayout;
