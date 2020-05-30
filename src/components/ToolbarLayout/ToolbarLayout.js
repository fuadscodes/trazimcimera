import React from "react";
import classes from './ToolbarLayout.css';
import Logo from "../Logo/Logo";
import Links from "./Links/Links";

const ToolbarLayout = (props) => {
    return (
        <div>
            <div className={classes.Toolbar}>
                <Logo />
                <Links/>
            </div>
            {props.children}
        </div>
    )
}

export default ToolbarLayout;
