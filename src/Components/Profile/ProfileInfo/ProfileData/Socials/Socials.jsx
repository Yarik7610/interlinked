import React, { Component } from 'react';
import { useState } from 'react';
import classes from './Socials.module.scss'
const Contact = ({title, value}) => {
    return <div className = {classes.contact}>{title}: {value}</div>
}

const Socials = (props) => {
    const [isOpened, setIsOpened] = useState(false)

    return (
        <div className = {classes.contactsWrap}>
            <div className = 'toggleSocialsBtn' onClick = {() => setIsOpened(!isOpened)}>Socials</div>
            <div className={classes.contacts}>
                {isOpened 
                ? Object.keys(props.profile.contacts).map(c => <Contact key = {c} title = {c} value = {props.profile.contacts[c]}/>)
                : ''
                }
            </div>
        </div>
    );
}
 
export default Socials;