import { useReducer } from "react";

const initialState = {
    personalInfo: {
        name: '',
        email: '',
        phone: '',
      },
      address: {
        street: '',
        city: '',
        zip: '',
      },
      summary: {
        summaryText: '',
      },
      currentStep: 1,
}

function formReducer(state, action) {
    switch (action.type) {
      case 'SET_PERSONAL_INFO': {
        return {
            ...state,
         personalInfo: { ...state.personalInfo, ...action.payload },
        }
      };
      case 'SET_ADDRESS':
      return {
        ...state,
        address: { ...state.address, ...action.payload },
      };
      case 'SET_STEP':
      return {
        ...state,
        currentStep: action.payload,
      };
      
      default: {
        return state;
      }

    }
}

export function useFormReducer() {
    
    const [state, dispatch] = useReducer(formReducer, initialState);

    const setPersonalInfo = (data) => dispatch({ type: 'SET_PERSONAL_INFO', payload: data });
    const setStep = (step) => dispatch({ type: 'SET_STEP', payload: step });
    const setSummary = (data) => dispatch({ type: 'SET_SUMMARY', payload: data });
    const setAddress = (data) => dispatch({ type: 'SET_ADDRESS', payload: data });
    
    return {
        state,
        setPersonalInfo,
        setStep,
        setAddress,
        setSummary
      };
}
