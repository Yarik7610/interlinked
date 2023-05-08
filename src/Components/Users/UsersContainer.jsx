import React from "react"
import {connect} from "react-redux"
import Users from "./Users"
import { follow, unfollow, getUsers} from "../../Redux/users-reducer"
import {getUsersReselector, getPageSizeSelector,  getTotalUsersCountSelector, getCurrentPageSelector, getIsFetchingSelector, getFollowingInProgressSelector} from "../../Redux/users-selectors"
import Preloader from "../Preloader/Preloader"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { compose } from "@reduxjs/toolkit"

class UsersContainer extends React.Component {
    
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    
    onPageChanged = (pageNum) => { //pageNum, тк на момент отправки еще будет старый номер страницы
        this.props.getUsers(pageNum, this.props.pageSize)
    }
    render() {
        return (
            this.props.isFetching ? <Preloader/> 
            : 
            <Users {...this.props}
                onPageChanged = {this.onPageChanged}
            />
        )
    } 
}

const mapStateToProps = (state) => ({
    users: getUsersReselector(state),
    pageSize: getPageSizeSelector(state),
    totalUsersCount: getTotalUsersCountSelector(state),
    currentPage: getCurrentPageSelector(state),
    isFetching: getIsFetchingSelector(state),
    followingInProgress: getFollowingInProgressSelector(state),
})

export default compose(
    connect(mapStateToProps, {follow, unfollow,  getUsers}),
    withAuthRedirect,
)(UsersContainer)







