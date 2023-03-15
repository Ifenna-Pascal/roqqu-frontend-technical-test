import React from "react";
import Logo from "../logo";

function MainLayout({ children, step, setStep }) {
  return (
    <div className="bg-[#030316] w-full flex flex-col items-center ">
      <div className="min-h-screen flex flex-col mx-auto items-center justify-center max-w-[900px]">
        <Logo />
        <main className="flex flex-col py-4">{children}</main>
        <button className="but my-4 w-full flex items-center py-3">
          {" "}
          Continue{" "}
        </button>
      </div>
    </div>
  );
}

export default MainLayout;
