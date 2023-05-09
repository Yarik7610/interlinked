import React from "react";
import classes from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../Preloader/Preloader"


const Profile = (props) => {

  if (!props.profile) return <Preloader/>

  return (
    <div className={classes.profile}>
      <ProfileInfo 
        userId = {props.userId} updatePhoto = {props.updatePhoto} 
        updateStatus = {props.updateStatus} profileAuthImg = {props.profileAuthImg}
        status = {props.status} profile = {props.profile}/>
      <MyPostsContainer profile = {props.profile}/>
    </div>
  );
};

export default Profile;
