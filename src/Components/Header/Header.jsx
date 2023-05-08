import React from 'react';
import classes from './Header.module.scss';
import {AiOutlineSearch} from 'react-icons/ai'
import { NavLink } from "react-router-dom";
import LoginBlock from "./LoginBlock/LoginBlock"
import {BsSun, BsMoon} from 'react-icons/bs'

const Header = (props) => {
   
    const changeTheme = () => {
        localStorage.setItem("isDark", JSON.stringify(!props.isDark))
        props.setIsDark(!props.isDark)
    }

    return (
        <div className={classes.header}>
            <div className = 'searchBlock'>
                <AiOutlineSearch size = {"1.5rem"} className = {classes.magnifier}/>
                <input className = {classes.searchInput} type = "text" placeholder='Search user'></input>
            </div>
            <button onClick = {changeTheme} className = 'btn-change-theme'>
                {props.isDark ? <BsSun size = {'1.5em'}/> :  <BsMoon size = {'1.5em'}/>}
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