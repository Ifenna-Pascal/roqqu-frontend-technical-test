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
      <Input title="User Name" placeholder={"Enter username"} />
    </div>
  );
}

export default StepperOne;
