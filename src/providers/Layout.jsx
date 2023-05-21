import React, { useContext } from "react";
import { ThemeContext } from "../App";

export const Layout = ({children}) => {
  
  const {isDark} = useContext(ThemeContext)
  
  return (
    <div className= {isDark ? 'dark' : 'light'}>
        {children}
    </div>
  );
};
