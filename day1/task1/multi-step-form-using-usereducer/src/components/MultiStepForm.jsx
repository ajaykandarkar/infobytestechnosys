import React from 'react'
import {useFormReducer} from "../hooks/useFormReducer"
import { PersonalInfoStep } from './PersonalInfoStep'
import { AddressStep } from './AddressStep'
import { SummaryStep } from './SummaryStep'
export const MultiStepForm = () => {

    const { state, setPersonalInfo,setStep,setAddress,setSummary } = useFormReducer();

    const handleNext = () => {
        if (state.currentStep < 3) {
          setStep(state.currentStep + 1);
        }
      };
    
      const handleBack = (e) => {
        e.preventDefault();
        if (state.currentStep > 1) {
          setStep(state.currentStep - 1);
        }
      };

  return (
   <>
     {
       state.currentStep === 1 &&(
        <PersonalInfoStep
         onNext = {handleNext} 
         personalInfo={state.personalInfo} 
         setPersonalInfo={setPersonalInfo} />
       )  
     }
    
    {state.currentStep === 2 && (
        <AddressStep 
        onNext={handleNext} 
        onBack={handleBack} 
        address={state.address} 
        setAddress={setAddress} />
      )}

    {state.currentStep === 3 && (
        <SummaryStep 
        onBack={handleBack}
         summary={{ ...state.personalInfo, ...state.address }} 
         setSummary={setSummary}/>
      )}
    
   </>
  )
}
