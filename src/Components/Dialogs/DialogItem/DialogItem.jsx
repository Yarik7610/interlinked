import React from "react";
import classes from "./DialogItem.module.scss";
import { NavLink } from "react-router-dom";
import dialogImg from "../../../images/dialogImg.webp"
const setActive = ({isActive}) => isActive ? classes.active : classes.default; 

const DialogItem = ({ name, id }) => {
  return (
      <NavLink to={"/dialogs/" + id} className={setActive}>
        <img className = {classes.img} src={dialogImg}/>
        {name}
      </NavLink>
  );
};

export default DialogItem;
