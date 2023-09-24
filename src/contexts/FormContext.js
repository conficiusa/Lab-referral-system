import { useState, createContext,useContext } from "react";

const FormContext = createContext()

export const useFormContext = ()=>{
    return useContext(FormContext)
}

export const FormProvider = ({children})=>{
    const [formData, setFormData] = useState({
        institution_type: '',
        admin_name : "" ,
        facilty_name:"",
        set_schedule: null,
        services_needed: [],
        setDestination: "",
        destination: "",
        time_Sample:null,
        patient_name:"",
        lhims_number:"",
        sample_type:'',
        selected_test:""
      });

     return(
        <FormContext.Provider value={{formData, setFormData}}>
            {children}
        </FormContext.Provider>
     ) 
}
