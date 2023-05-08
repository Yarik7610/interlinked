import React from "react";

export const Layout = ({children, isDark}) => {
  
  return (
    <div className= {isDark ? 'dark' : 'light'}>
        {children}
    </div>
  );
};
