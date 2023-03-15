import React from "react";
import Header from "../shared/Header";
import Input from "../shared/Input";

function StepperThree() {
  return (
    <div className="flex flex-col">
      <Header header={"Hey Asad pls your Phone Number"} />
      <Input
        placeholder={"081223343534"}
        icon="ri-user-line"
        type={"number"}
        name={"number"}
      />
    </div>
  );
}

export default StepperThree;
