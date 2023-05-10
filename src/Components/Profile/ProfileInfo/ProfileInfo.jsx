import React, {useState, useEffect} from "react";
import classes from "./ProfileInfo.module.scss";
import bg from "../../../images/background.webp"
import noImg from "../../../images/noImg.png"
import ChangeImg from './ChangeImg/ChangeImg'
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from './ProfileDataForm/ProfileDataForm'

const ProfileInfo = (props) => {

  const [inEdit, setInEdit] = useState(false)
 
  
  return (
    <div className = {classes.profileInfo}>
      <div className={classes.bgImg}>
        <img src= {bg}/>
      </div>
      <div className = {classes.profileImage}>
        {props.profile.photos.large ? <img src = {props.profile.photos.large}/> : <img src = {noImg}/> }
        {!props.userId ? <ChangeImg updatePhoto = {props.updatePhoto}/> : ''}
      </div>
      <div className ={classes.descr}>
        {props.userId === undefined && inEdit
          ? <ProfileDataForm profile = {props.profile} setInEdit = {setInEdit} saveProfile = {props.saveProfile}/>
          : <ProfileData userId = {props.userId} setInEdit = {setInEdit} {...props}/>
        }
      </div>
      
     
    </div>
  );
}


export default ProfileInfo;
