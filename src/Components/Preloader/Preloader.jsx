import React from 'react'
import preloader from "../../images/preloader.svg"
import classes from "./Preloader.module.scss"

let Preloader = () => {
    
   return (
    <div className = {classes.preloaderWrap}>
        <img src = {preloader} />
    </div>
   )

}

export default Preloader;