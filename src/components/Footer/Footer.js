import React from "react";
import classes from './Footer.css';

const Footer = (props) => {
    return (
        <div className={classes.Footer}>
            <p>ZAPRATITE NAS NA DRUŠTVENIM MREŽAMA</p>
            <div>
                <a href="https://www.instagram.com/trazimcimera/" target="_blank">
                    <img src={require("../../assets/icons/insta.png")} alt="instagram"/>
                </a>
                <a href="https://www.facebook.com/Tra%C5%BEim-cimera-110515727222752/" target="_blank">
                    <img src={require("../../assets/icons/facebook.png")} alt="facebook"/>
                </a>
            </div>
        </div>
    )
}

export default Footer;
