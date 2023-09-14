import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile" className={a => a.isActive ? classes.active : ''}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" className={a => a.isActive ? classes.active : ''}>Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/News" className={a => a.isActive ? classes.active : ''}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/Music" className={a => a.isActive ? classes.active : ''}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/Settings" className={a => a.isActive ? classes.active : ''}>Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
