import { simulationFormSteps } from "@/src/data/simulation";
import { FormStep } from "./FormStep";
import { StepProgress } from "./Progress";

export function SimulationForm() {
  const currentStep = simulationFormSteps[5]
  return (
    <>
     <StepProgress currentStep={1} totalSteps={5}/>
     <FormStep 
      key={currentStep.id}
      {...currentStep}
     />
    </>
  )
}