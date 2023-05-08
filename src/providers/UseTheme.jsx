import React, {useContext}  from "react";
import { ThemeContext } from "./ThemeProvider";

export const UseTheme = () => {
  const value = useContext(ThemeContext)
  return value
};
