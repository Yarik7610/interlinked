import React from 'react';
import s from './ProfileData.module.scss'
import Socials from './Socials/Socials'
import ProfileStatus from './ProfileStatus/ProfileStatus'

const ProfileData = (props) => {

    if (props.userId) props.setInEdit(false) 
    
    return (
      <>
        {!props.userId 
          ? <button className = 'btnProfileEdit' onClick = {() => props.setInEdit(true)}>Edit profile</button>
          : ''
        }
        <h1>{props.profile.fullName}</h1>
        <ProfileStatus updateStatus = {props.updateStatus} status = {props.status}/>
        <div className = {s.aboutMe}>
          About me: {props.profile.aboutMe}
        </div>
        <Socials profile = {props.profile}/>
      </>
    )
}

export default ProfileData