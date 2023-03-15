import { useState } from "react";
import "./App.css";
import UseStepper from "./componet/hooks/useSteper";
import MainLayout from "./componet/layout/MainLayout";
import "remixicon/fonts/remixicon.css";
import { stepper } from "./componet/stepper";

function App() {
  const [step, setStep] = useState(1);

  return (
    <MainLayout setStep={setStep} step={step}>
      <UseStepper step={step} stepObject={stepper} />
    </MainLayout>
  );
}

export default App;
