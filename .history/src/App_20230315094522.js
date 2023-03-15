import { useState } from "react";
import "./App.css";
import UseStepper from "./componet/hooks/useSteper";
import MainLayout from "./componet/layout/MainLayout";
import StepperFour from "./componet/stepper/StepperFour";
import StepperOne from "./componet/stepper/StepperOne";
import StepperThree from "./componet/stepper/StepperThree";
import StepperTwo from "./componet/stepper/StepperTwo";
import "remixicon/fonts/remixicon.css";

function App() {
  const [step, setStep] = useState(1);

  return (
    <MainLayout>
      <UseStepper step={step} stepObject={stepper} />
    </MainLayout>
  );
}

export default App;
