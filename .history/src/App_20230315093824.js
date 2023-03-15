import { useState } from "react";
import "./App.css";
import UseStepper from "./componet/hooks/useSteper";
import MainLayout from "./componet/layout/MainLayout";

function App() {
  const [step, setStep] = useState(1);
  const stepper = {
    1: <StepperOne />,
    2: <StepperTwo />,
    3: <StepperThree />,
    4: <StepperFour />,
  };
  return (
    <MainLayout>
      <UseStepper step={step} stepObject={stepper} />
    </MainLayout>
  );
}

export default App;
