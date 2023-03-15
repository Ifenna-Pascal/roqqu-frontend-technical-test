import React from "react";
import Header from "../shared/Header";
import Input from "../shared/Input";

function StepperFour() {
  return (
    <div className="flex flex-col">
      <Header header={"Hey Asad pls your email and password"} />
      <Input
        title="Email Address"
        placeholder={"joe@gmi.com"}
        icon="ri-mail-line"
        name={"firstname"}
      />
      <Input
        title="Email Address"
        placeholder={"joe@gmi.com"}
        icon="ri-mail-line"
        name={"firstname"}
      />
    </div>
  );
}

export default StepperFour;
