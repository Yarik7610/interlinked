import React from 'react';
import Header from './Header';
import { connect } from "react-redux";
import {logout} from "../../Redux/auth-reducer"

const HeaderContainer = (props) => {
    return <Header {...props}/>
}

let mapStateToProps = (state) => ({
    login: state.auth.login,
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth,
    profile: state.profilePage.profile,
    profileAuthImg: state.profilePage.profileAuthImg
})
   
export default connect(mapStateToProps, {logout})(HeaderContainer)