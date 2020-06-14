import React from "react";
import classes from './Oglas.css';

const Oglas = (props) => {

    return (
        <div className={classes.Oglas}>
            <hr className={classes.hr}/>
                <p>{props.text}</p>
                <p className={classes.Middle}>ADRESA: {props.adresa}</p>
                <p className={classes.Middle}>BROJ CIMERA: {props.brojCimera}</p>
                <p className={classes.Middle}>CIJENA: {props.cijena} KM</p>
                <p className={classes.Small}>{props.ime} {props.prezime}</p>
                <p className={classes.Small}>EMAIL: {props.email}</p>
            <hr className={classes.hr}/>
        </div>
    )
}

export default Oglas;
