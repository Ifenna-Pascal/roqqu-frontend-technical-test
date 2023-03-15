import React from "react";
import Header from "../shared/Header";
import Input from "../shared/Input";

function StepperOne() {
  return (
    <div className="flex flex-col">
      <Header
        header={"Hey 👌 Welcome to Roqqu "}
        content="Lets get to know you and you"
      />
      <Input
        title="User Name"
        placeholder={"Enter username"}
        icon="ri-user-line"
        name={"username"}
      />
      <div className="flex items-center">
        <input type={"checkbox"} />
        <p className="text-white text-[10px] font-semibold">
          I aggre to Roqqu's{" "}
          <span className="text-blue-400">Terms and conditions</span>
        </p>
      </div>
    </div>
  );
}

export default StepperOne;
