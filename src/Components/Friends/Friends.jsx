import React from "react";
import Friend from "./Friend/Friend";
import classes from "./Friends.module.scss";
import {FaUserFriends} from "react-icons/fa"

const Friends = (props) => {

  return (
    <div className = {classes.friends}>
      <div className = {classes.friendsHl}>
        <FaUserFriends size = {"1.25em"} />
        <div className={classes.friendsHlBody}>Friends</div>
      </div>
      {props.isAuth ? 
        <div className= {classes.friendsList}>
          {props.friendsData.map(elem => <Friend name = {elem.name} key = {elem.id} id = {elem.id} photo = {elem.photos.small}/>)}
        </div>
      : ""
      }
      
    </div>
  );
};

export default Friends;
