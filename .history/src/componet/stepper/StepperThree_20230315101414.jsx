import React from "react";
import Header from "../shared/Header";
import Input from "../shared/Input";

function StepperThree() {
  return (
    <div className="flex flex-col">
      <Header header={"Hey Asad pls your legal name"} />
      <Input
        title="First Name"
        placeholder={"e.g Joe"}
        icon="ri-user-line"
        name={"firstname"}
      />
    </div>
  );
}

export default StepperThree;
