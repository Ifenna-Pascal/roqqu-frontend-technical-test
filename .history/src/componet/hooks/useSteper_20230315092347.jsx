import React from "react";

function useSteper() {
  return function UseStepper({ step, stepObject }: IProps) {
    return stepObject[step];
  };
}

export default useSteper;
