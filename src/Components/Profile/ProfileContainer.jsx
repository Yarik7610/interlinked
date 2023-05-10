import React from "react";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Profile from "./Profile"
import { connect } from "react-redux";
import {getUserProfile, getStatus, updateStatus, updatePhoto, saveProfile} from "../../Redux/profile-reducer"
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "@reduxjs/toolkit";
import { useEffect } from "react";


const ProfileContainer = (props) => {
    
    let { userId } = useParams()
    let navigate = useNavigate()
   
    useEffect(() => {
        if (!userId) { 
            userId = props.id
            if(!userId) navigate('/login')
        }
        if (userId) {
            props.getUserProfile(userId)
            props.getStatus(userId)
        }
    }, [userId, props.profileAuthImg])

    return (
        <Profile {...props} userId = {userId} /> 
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    id: state.auth.id,
    profileAuthImg: state.profilePage.profileAuthImg,
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, updatePhoto, saveProfile}),
    withAuthRedirect
)(ProfileContainer)



// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

// export default connect(mapStateToProps, {getUserProfile})(withRouter(AuthRedirectComponent))


