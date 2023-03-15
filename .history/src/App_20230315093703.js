import { useState } from "react";
import "./App.css";
import UseStepper from "./componet/hooks/useSteper";
import MainLayout from "./componet/layout/MainLayout";
import { stepper } from "./componet/stepper";

function App() {
  const [step, setStep] = useState(1);
  return (
    <MainLayout>
      <UseStepper step={step} stepObject= />
    </MainLayout>
  );
}

export default App;
