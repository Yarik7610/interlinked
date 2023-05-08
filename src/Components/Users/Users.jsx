import React from 'react'
import classes from "./Users.module.scss"
import Paginator from './Paginator/Paginator'
import User from './User/User'

let Users = (props) => {

    return (
        <div className= {classes.users}>
            <div className={classes.userHl}>
                <div className={classes.userHlText}>Users</div>
                <Paginator totalUsersCount = {props.totalUsersCount} pageSize = {props.pageSize} 
                    currentPage = {props.currentPage} onPageChanged = {props.onPageChanged}
                />
            </div>
            {   
                props.users.map(u =>     //u это один юзер из всего массива юзеров
                    <User key = {u.id} u = {u} follow = {props.follow} 
                        unfollow = {props.unfollow} 
                        followingInProgress = {props.followingInProgress}/>
                )
            }
        </div>
    )
   
}

export default Users;