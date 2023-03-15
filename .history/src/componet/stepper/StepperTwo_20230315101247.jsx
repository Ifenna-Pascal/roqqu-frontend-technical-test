import React from "react";
import Header from "../shared/Header";
import Input from "../shared/Input";

function StepperTwo() {
  return (
    <div className="flex flex-col">
      <Header header={"Hey Asad pls your legal name"} />
      <Input
        title="User Name"
        placeholder={"Enter username"}
        icon="ri-user-line"
        name={"username"}
      />
    </div>
  );
}

export default StepperTwo;
