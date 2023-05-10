import React from 'react';
import classes from './ProfileDataForm.module.scss'
import {useForm} from 'react-hook-form'
import { profileAPI } from '../../../../api/api';

const ProfileDataForm = (props) => {

    const {register, handleSubmit, setError, formState: {errors, isValid}} = useForm({
      mode: "all",
      defaultValues: {
        fullName: props.profile.fullName,
        aboutMe: props.profile.aboutMe,
        lookingForAJobDescription: props.profile.lookingForAJobDescription,
        contacts: {
          facebook: props.profile.contacts.facebook,
          website: props.profile.contacts.website,
          vk: props.profile.contacts.vk,
          twitter: props.profile.contacts.twitter,
          instagram: props.profile.contacts.instagram,
          youtube: props.profile.contacts.youtube,
          github: props.profile.contacts.github,
          mainLink: props.profile.contacts.mainLink,
        },
      }
    })
  
    const onSubmit = (data) => {
      props.saveProfile(data, props.profile.userId, setError)
        .then(() => props.setInEdit(false))
        .catch(err => console.log(err))
    }

    return (
    
      <div className= {classes.profileDataForm}>
        <form onSubmit = {handleSubmit(onSubmit)}>
          <button type = 'submit' className = 'btnProfileEdit' disabled = {!isValid}>Save changes</button>
          <input className = {`logInput ${errors.fullName && 'errorBorder'}`} placeholder='Fullname' type = 'text'
            {...register('fullName', {
              required: 'Fullname is required',
              validate: value => value.trim() !== '' ? null : 'No white spaces',
            })}
          />
          {errors.fullName && <div className="errorMsg">{errors.fullName.message}</div>}
          <input className = 'logInput' placeholder='About me' type = 'text' 
            {...register('aboutMe', {
              required: 'About me is required',
              validate: value => value.trim() !== '' ? null : 'No white spaces',
            })}
          />
          {errors.aboutMe && <div className="errorMsg">{errors.aboutMe.message}</div>}
          <input className = 'logInput' placeholder='Looking for a job description' type = 'text' 
            {...register('lookingForAJobDescription', {
              required: 'Looking for a job description is required',
              validate: value => value.trim() !== '' ? null : 'No white spaces',
            })}
          />
          {errors.lookingForAJobDescription && <div className="errorMsg">{errors.lookingForAJobDescription.message}</div>}
          <div style = {{'margin':'10px 0 0 5px'}}>Socials (optional):</div>
          {Object.keys(props.profile.contacts).map(c => 
            <div key = {c}>
              <input className = 'logInput' placeholder={c[0].toUpperCase() + c.slice(1)} type = 'text' 
                {...register(`contacts.${c}`)}
                
              />
              {errors.contacts?.[c] && <div className="errorMsg">{errors.contacts[c].message}</div>} 
              {/* обращемся к с через [] т.к мы берем значение с в качестве свойства объекта */}
            </div>
          )}
        </form>
      </div>
    )
}

export default ProfileDataForm