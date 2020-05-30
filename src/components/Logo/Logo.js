import React from "react";
import classses from './Logo.css';

const Logo = (props) => {
    return (
        <img className={classses.Logo} src={require("../../assets/images/logo.png")} alt="trazim_cimera_logo"/>
    )
}

export default Logo;
