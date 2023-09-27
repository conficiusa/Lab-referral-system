import { useState, createContext,useContext } from "react";

const MenuContext = createContext()


export const useMenuContext = ()=>{
    return useContext(MenuContext)
}

export const MenuProvider = ({children})=>{
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handlemenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handlemenuClose = () => {
      setAnchorEl(null);
    };

    return(
        <MenuContext.Provider value={{anchorEl, setAnchorEl,open,handlemenuClick,handlemenuClose}}>
            {children}
        </MenuContext.Provider>
    )
}
