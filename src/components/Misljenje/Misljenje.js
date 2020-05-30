import React from "react";
import classes from './Misljenje.css';

const Misljenje = (props) => {
    return (
        <div className={classes.Misljenje}>
            <p className={classes.Text}><strong>{props.oglas.contact.message}</strong></p>
            <p>-{props.oglas.contact.name}</p>
        </div>
    )
}

export default Misljenje;
