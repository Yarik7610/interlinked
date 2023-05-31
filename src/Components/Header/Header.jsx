import React from 'react';
import classes from './Header.module.scss';
import { NavLink } from "react-router-dom";
import LoginBlock from "./LoginBlock/LoginBlock"
import {BsSun, BsMoon} from 'react-icons/bs'
import { useContext } from 'react';
import { ThemeContext } from '../../App';
import SearchContainer from './Search/SearchContainer';

const Header = (props) => {
    
    const {isDark, setIsDark} = useContext(ThemeContext)

    const changeTheme = () => {
        localStorage.setItem("isDark", JSON.stringify(!isDark))
        setIsDark(!isDark)
    }

    return (
        <div className={classes.header}>
            <SearchContainer/>
            <button onClick = {changeTheme} className = 'btn-change-theme'>
                {isDark ? <BsSun size = {'1.5em'}/> :  <BsMoon size = {'1.5em'}/>}
            </button>
            <div className = {classes.loginBlock}>
                {props.isAuth 
                ? <LoginBlock {...props}/>
                : <NavLink to = "/login">Login</NavLink>
                }
            </div>        
        </div>
    )
}

export default Header;