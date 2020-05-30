import React from "react";
import './Layout.css';
import Navbar from "../Navbar/Navbar";
import classes from './Layout.css';

const Layout = (props) => {
    return (
        <>
            <Navbar/>
            <div className={classes.Main}>
                {props.children}
            </div>
        </>
    )
}

export default Layout;
