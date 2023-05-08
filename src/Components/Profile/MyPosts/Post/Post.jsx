import React from "react";
import classes from "./Post.module.scss";
import noImg from "../../../../images/noImg.png"


const Post = (props) => {
  return (
    <div className={classes.post}>
      <div className={classes.avaAndText}>
        {props.profile.photos.large ? <img src = {props.profile.photos.large}/> : <img className = {classes.img} src = {noImg}/> }
        {/* <img className = {classes.img} src = {} /> */}
        <div className ={classes.text}>
          {props.message}
        </div>
      </div>
      <div className ={classes.like}>
        like  
        <span className= {classes.likesCount}>{props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
