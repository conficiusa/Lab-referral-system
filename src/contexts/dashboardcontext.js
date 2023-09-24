import { useState, createContext,useContext } from "react";

const DashboardContext = createContext()

export const useDashboardContext = ()=>{
    return useContext(DashboardContext)
}

export const DashboardProvider = ({children})=>{
    const [dashboardState, setDashboardState] = useState(0);

     return(
        <DashboardContext.Provider value={{dashboardState, setDashboardState}}>
            {children}
        </DashboardContext.Provider>
     ) 
}
