import React from "react";
import classes from "./Friend.module.scss";
import noImg from "../../../images/noImg.png"
import { NavLink } from "react-router-dom";

const Friend = (props) => {
  return (
    <div className = {classes.friend}>
      <img src = {props.photo === null ? noImg : props.photo}/>
      <div className= {classes.friendName}>
        <NavLink to = {'/profile/' + props.id}>{props.name}</NavLink>
      </div>
    </div>
  );
};

export default Friend;
