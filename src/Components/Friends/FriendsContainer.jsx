import React from "react"
import { connect } from "react-redux"
import { compose } from "@reduxjs/toolkit"
import Friends from "./Friends"
import {setMyFriends} from "../../Redux/friends-reducer"
// import {withAuthRedirect} from "../../hoc/withAuthRedirect"


class FriendsContainer extends React.Component {
  
    componentDidMount() {
        this.props.setMyFriends()
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.users !== this.props.users) {  //нажмем на кнопку подписки и во всех юзерах у объекта поменяется свойство followed, потому прошлые юзеры не равны новым юзерам
            this.props.setMyFriends()
        }
    }
    render() {
        return <Friends {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    friendsData: state.friends.friendsData,
    isAuth: state.auth.isAuth,
    users: state.usersPage.users,
})

export default compose(
    connect(mapStateToProps, {setMyFriends})
    // withAuthRedirect
)(FriendsContainer)

