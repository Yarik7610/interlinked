import React, {useEffect} from 'react';
import s from './ProfileData.module.scss'
import Socials from './Socials/Socials'
import ProfileStatus from './ProfileStatus/ProfileStatus'

const ProfileData = (props) => {

    useEffect(() => {
      if (props.userId) props.setInEdit(false) 
    }, [props.userId])

    return (
      <>
        {!props.userId 
          ? <button className = 'btnProfileEdit' onClick = {() => props.setInEdit(true)}>Edit profile</button>
          : ''
        }
        <h1>{props.profile.fullName}</h1>
        {!props.userId ? <ProfileStatus updateStatus = {props.updateStatus} status = {props.status}/> 
          : <div><span>{props.status || "---"}</span></div>}
        <div className = {s.aboutMe}>
          <div>About me: {props.profile.aboutMe}</div> 
          <div>Looking for a job description: {props.profile.lookingForAJobDescription}</div>
        </div>
        <Socials profile = {props.profile}/>
      </>
    )
}

export default ProfileData