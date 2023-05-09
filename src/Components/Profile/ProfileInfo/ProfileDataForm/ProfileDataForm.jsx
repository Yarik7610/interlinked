import React from 'react';
import classes from './ProfileDataForm.module.scss'
import {useForm} from 'react-hook-form'

const ProfileDataForm = (props) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
      mode: "all",
      defaultValues: {
        fullName: props.profile.fullName,
        aboutMe: props.profile.aboutMe,
        facebook: props.profile.contacts.facebook,
        website: props.profile.contacts.website,
        vk: props.profile.contacts.vk,
        twitter: props.profile.contacts.twitter,
        instagram: props.profile.contacts.instagram,
        youtube: props.profile.contacts.youtube,
        github: props.profile.contacts.github,
        mainLink: props.profile.contacts.mainLink,
      }
    })
  
    const onSubmit = (data) => {
      console.log(data)
      props.setInEdit(false)
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
            {...register('aboutMe')}
          />
          <div style = {{'margin':'10px 0 0 5px'}}>Socials (optional):</div>
          <input className = 'logInput' placeholder='Facebook' type = 'text' 
            {...register('contacts.facebook')}
          />
          <input className = 'logInput' placeholder='Website' type = 'text' 
            {...register('contacts.website')}
          />
          <input className = 'logInput' placeholder='Vk' type = 'text' 
            {...register('contacts.vk')}
          />
           <input className = 'logInput' placeholder='Twitter' type = 'text' 
            {...register('contacts.twitter')}
          />
          <input className = 'logInput' placeholder='Instagram' type = 'text' 
            {...register('contacts.instagram')}
          />
          <input className = 'logInput' placeholder='Youtube' type = 'text' 
            {...register('contacts.youtube')}
          />
          <input className = 'logInput' placeholder='Github' type = 'text' 
            {...register('contacts.github')}
          />
          <input className = 'logInput' placeholder='Mainlink' type = 'text' 
            {...register('contacts.mainLink')}
          />
        </form>
      </div>
    )
}

export default ProfileDataForm