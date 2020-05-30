import React from "react";
import './Links.css';
import {NavLink} from "react-router-dom";
import classes from './Links.css';
import AuthApi from "../../../auth-api";
import Cookies from 'js-cookie';

const Links = (props) => {
    let style = {
        color: '#3e69dc',
            textDecoration: 'underline'
    }

    const Auth = React.useContext(AuthApi);

    const handleClick = () => {
        Auth.setAuth(false);
        Cookies.remove("user");
    }

    return (
        <div className={classes.Links}>
            <NavLink
                className={classes.Link}
                to="/oglasi"
                exact
                activeStyle={style}>Oglasi</NavLink>
            <NavLink
                className={classes.Link}
                to="/dodaj_oglas"
                exact
                activeStyle={style}>Dodaj oglas</NavLink>
            <input id="odjava" type="button" value="Odjavi se" onClick={handleClick}/>
        </div>
    )
}

export default Links;
