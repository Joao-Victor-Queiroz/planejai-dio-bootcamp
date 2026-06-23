import { PiggyBank } from "lucide-react";
import { FormStep } from "./FormStep";
import { StepProgress } from "./Progress";

export function SimulationForm() {
  return (
    <>
     <StepProgress currentStep={1} totalSteps={5}/>
     <FormStep 
      icon={PiggyBank}
      title='Renda mensal bruta'
      question="Quanto é depositado na sua conta todo mês (somando todas as fontes)?"
     />
    </>
  )
}