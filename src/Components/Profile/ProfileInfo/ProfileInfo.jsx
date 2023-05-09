import React from "react";
import classes from "./ProfileInfo.module.scss";
import { NavLink } from "react-router-dom";
import bg from "../../../images/background.webp"
import {AiFillFacebook, AiFillGithub} from "react-icons/ai"
import {SlSocialVkontakte} from "react-icons/sl"
import noImg from "../../../images/noImg.png"
import ProfileStatus from "./ProfileStatus"
import ChangeImg from "./ChangeImg/ChangeImg";

const ProfileInfo = (props) => {

  return (
    <div className = {classes.profileInfo}>
      <div className={classes.bgImg}>
        <img src= {bg}/>
      </div>
      <div className = {classes.profileImage}>
        {props.profileAuthImg ? <img src = {props.profileAuthImg}/> : <img src = {noImg}/> }
        {!props.userId ? <ChangeImg updatePhoto = {props.updatePhoto}/> : ''}
      </div>
      <div className ={classes.descr}>
        <h1>{props.profile.fullName}</h1>
        <ProfileStatus updateStatus = {props.updateStatus} status = {props.status}/>
        <div className = {classes.aboutMe}>
          About me: {props.profile.aboutMe}
        </div>
          {props.profile.contacts.facebook && props.profile.contacts.vk && props.profile.contacts.github ? 
            <ul className = {classes.contacts}>
              <li><NavLink className = {classes.contact} target = "_blank" to = {props.profile.contacts.facebook}><AiFillFacebook size={"1.5rem"}/></NavLink></li>
              <li><NavLink className = {classes.contact}target = "_blank" to = {props.profile.contacts.vk}><SlSocialVkontakte size={"1.5rem"}/></NavLink></li>
              <li><NavLink className = {classes.contact}target = "_blank" to = {props.profile.contacts.github}><AiFillGithub size={"1.5rem"}/></NavLink></li>
            </ul>
            : ""
          }
      </div>
    </div>
  );
}

export default ProfileInfo;
