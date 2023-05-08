import React from "react";
import classes from "./Navbar.module.scss";
import logo from "../../images/logo1.png"
import { NavLink } from "react-router-dom";
import FriendsContainer from "../Friends/FriendsContainer"
import { CgProfile } from "react-icons/cg";
import { AiOutlineMessage } from "react-icons/ai";
import { TbNews } from "react-icons/tb";
import { RiSettings2Line } from "react-icons/ri"
import { RiUserSearchFill } from "react-icons/ri"

const setActive = ({ isActive }) =>
  isActive ? classes.active : classes.navItem; //деструктуризация объекта, стрелочая функция

const Navbar = () => {
 
  return (
    <div className={classes.wrapper}>
      <div className  = {classes.siteHl}>
          <img className = {classes.siteLogo} src = {logo}/>
          <div className = {classes.siteName}>Interlinked</div>
      </div>
      <div className={classes.nav}>
          <NavLink to="/profile" className={setActive}>
            <div className={classes.navItemBody}>
              <CgProfile size = {"1.25em"} />
              <div className={classes.navItemText}>Profile</div>
            </div>
          </NavLink>
          <NavLink to="/dialogs" className={setActive}>
            <div className={classes.navItemBody}>
              <AiOutlineMessage  size = {"1.25em"} />
              <div className={classes.navItemText}>Dialogs</div>
            </div>
          </NavLink>
          <NavLink to="/users" className={setActive}>
            <div className={classes.navItemBody}>
              <RiUserSearchFill  size = {"1.25em"} />
              <div className={classes.navItemText}>Users</div>
            </div>
          </NavLink>
          <NavLink to="/news" className={setActive}>
            <div className={classes.navItemBody}>
              <TbNews size = {"1.25em"} />
              <div className={classes.navItemText}>News</div>
            </div>
          </NavLink>
          <NavLink to="/settings" className={setActive}>
            <div className={classes.navItemBody}>
              <RiSettings2Line size = {"1.25em"} />
              <div className={classes.navItemText}>Settings</div>
            </div>
          </NavLink>
        <FriendsContainer/>
      </div>
    </div>
  );
};

export default Navbar;



