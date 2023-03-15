import React from "react";

function StepperFour() {
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

export default StepperFour;
