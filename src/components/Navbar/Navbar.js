import React from "react";
import Logo from "../Logo/Logo";
import Links from "../Links/Links";
import classes from './Navbar.css';

const Navbar = (props) => {
    return (
        <div className={classes.Navbar}>
            <Logo/>
            <Links/>
        </div>
    )
}

export default Navbar;
