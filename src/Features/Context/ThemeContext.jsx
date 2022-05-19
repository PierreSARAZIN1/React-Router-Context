import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

    const [theme, setTheme] = useState(JSON.parse(localStorage.theme));
    
    useEffect(() => {
      localStorage.setItem("theme", JSON.stringify(theme))
    
    }, [theme])
    

    const toggleTheme = () => {
    setTheme(!theme)
    }
    console.log("le boolean change ?")
    console.log(theme)
    return (

    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {props.children}
    </ThemeContext.Provider >

    );
}

export default ThemeContextProvider