import "./App.css";
import UseStepper from "./componet/hooks/useSteper";
import MainLayout from "./componet/layout/MainLayout";
import { stepper } from "./componet/stepper";

function App() {
  return <MainLayout>
    <UseStepper step={} stepObject={stepper} />
  </MainLayout>;
}

export default App;
