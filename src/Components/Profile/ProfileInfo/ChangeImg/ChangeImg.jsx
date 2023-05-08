import React, { useState } from 'react';
import s from './ChangeImg.module.scss'

const ChangeImg = (props) => {

    const onPhotoSelected = (e) => {
        props.updatePhoto(e.target.files[0])
    }

    return (
        <div className={s.changeImgBtn}>
            <input onChange={onPhotoSelected} type="file" accept=".png"/>
        </div>
    );
}
 
export default ChangeImg;