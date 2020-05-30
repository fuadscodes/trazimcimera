import React from "react";
import classes from './Oglas.css';

const Oglas = (props) => {

    return (
        <div className={classes.Oglas}>
            <hr className={classes.hr}/>
                <p>{props.text}</p>
                <p className={classes.Small}>TEL: {props.telefon}</p>
                <p className={classes.Small}>CIJENA: {props.cijena}</p>
            <hr className={classes.hr}/>
        </div>
    )
}

export default Oglas;
