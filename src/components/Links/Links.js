import React from "react";
import './Links.css';
import {NavLink} from "react-router-dom";
import classes from './Links.css';

const Links = (props) => {
    let style = {
        color: '#3e69dc',
            textDecoration: 'underline'
    }

    return (
        <div className={classes.Links}>
            <NavLink
                className={classes.Link}
                to="/"
                exact
                activeStyle={style}>Početna</NavLink>
            <NavLink
                className={classes.Link}
                to="/kontakt"
                exact
                activeStyle={style}>Kontakt</NavLink>
            <NavLink
                className={classes.Link}
                to="/prijava"
                exact
                activeStyle={style}>Prijava</NavLink>
            <NavLink
                className={classes.Link}
                to="/registracija"
                exact
                activeStyle={style}>Registracija</NavLink>
        </div>
    )
}

export default Links;
