import React, { useEffect } from "react"
import {connect} from "react-redux"
import Users from "./Users"
import { follow, unfollow, getUsers} from "../../Redux/users-reducer"
import {getUsersReselector, getPageSizeSelector,  getTotalUsersCountSelector, getCurrentPageSelector, getIsFetchingSelector, getFollowingInProgressSelector} from "../../Redux/users-selectors"
import Preloader from "../Preloader/Preloader"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { compose } from "@reduxjs/toolkit"


const UsersContainer = (props) => {

    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize, props.term)
    }, [])
    
    const onPageChanged = (pageNum) => { 
        props.getUsers(pageNum, props.pageSize, props.term)
    }

    return (
        props.isFetching ? <Preloader/> 
            : 
            <Users {...props}
                onPageChanged = {onPageChanged}
            />
    )
}


const mapStateToProps = (state) => ({
    users: getUsersReselector(state),
    pageSize: getPageSizeSelector(state),
    totalUsersCount: getTotalUsersCountSelector(state),
    currentPage: getCurrentPageSelector(state),
    isFetching: getIsFetchingSelector(state),
    followingInProgress: getFollowingInProgressSelector(state),
    term: state.usersPage.term,
})

export default compose(
    connect(mapStateToProps, {follow, unfollow, getUsers}),
    withAuthRedirect,
)(UsersContainer)







