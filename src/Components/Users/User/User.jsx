import React from 'react'
import noImg from "../../../images/noImg.png"
import classes from "./User.module.scss"
import {IoIosCloseCircleOutline} from "react-icons/io"
import {IoIosAddCircleOutline} from "react-icons/io"
import { NavLink } from 'react-router-dom'

let User = ({u, follow, unfollow, followingInProgress}) => {

    return (
        <li className = {classes.user}>
            <div className= {classes.userImgBlock}>
                {u.followed
                    ? <button className = {classes.followingBtn} disabled = {followingInProgress.some(id => id === u.id)} 
                        onClick = {() => { unfollow(u.id)}}>
                        <IoIosCloseCircleOutline size = {"2em"}/>
                    </button>
                    : <button className = {classes.followingBtn} disabled = {followingInProgress.some(id => id === u.id)} 
                        onClick = {()=> {follow(u.id)}}>
                        <IoIosAddCircleOutline  size = {"2em"}/>
                    </button>
                }
                <NavLink to={'/profile/' + u.id}>
                    <img src = {u.photos.small ? u.photos.small : noImg} />
                </NavLink>
                <div>{u.name}</div>
            </div>
            <div className = {classes.userStatus}>
                {u.status ? u.status : "no status yet"}
            </div>
            {/* <div className = {classes.userCountry}>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
            </div> */}
        </li>
    )
   
}

export default User;