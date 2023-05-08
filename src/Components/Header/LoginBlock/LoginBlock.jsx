import React, {useState} from 'react'
import classes from './LoginBlock.module.scss';
import {FiLogOut} from "react-icons/fi"
import { Navigate } from "react-router-dom";


const LoginBlock = (props) => {
    const [menuIsOpened, setMenuIsOpened] = useState(false)

    const loginOut = () => {
        props.logout()
        if (!props.isAuth) return <Navigate to={'/login'}/>
    }

    return (
        <div className = {classes.imgAndLoginBl} onClick={() => {setMenuIsOpened(!menuIsOpened)}}>
            <div>{props.login}</div>
            <img src = {props.profileAuthImg}></img>
            {menuIsOpened && 
                <div className = 'menuLogout'>
                    <div onClick = {loginOut} className= {classes.menuPosition}>
                        <FiLogOut size ={'1.3em'}/>
                        <span className={classes.menuLabel}>Exit</span>
                    </div>
                </div>
            }
        </div> 
    )
}

export default LoginBlock