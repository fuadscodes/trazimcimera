import React from "react";
import classes from './Main.css';

const Main = (props) => {
    return (
        <div className={classes.Main}>
            {props.children}
        </div>
    )
}

export default Main;
