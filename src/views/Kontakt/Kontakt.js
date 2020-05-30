import React from "react";
import classes from './Kontakt.css';
import Layout from "../../components/Layout/Layout";
import Main from "../../components/Main/Main";

const Kontakt = (props) => {
    return (
        <Layout>
            <Main>
                <div className={classes.Kontakt}>
                    <h1>Kontakt</h1>
                    <p className={classes.Text}>Ako imate neko pitanje ili problem slobodno nam se javite na jednu od naših društvenih mreža ili ispunite formu i očekujte odgovor u što manjem roku.</p>
                    <div className={classes.Lower}>
                        <div className={classes.DrustveneMreze}>
                            <h4 className={classes.Naslovi}>Društvene mreže</h4>
                            <a href="https://www.instagram.com/trazimcimera/" target="_blank">
                                <img src={require("../../assets/icons/insta.png")} alt="instagram"/>
                            </a>
                            <a href="https://www.facebook.com/Tra%C5%BEim-cimera-110515727222752/" target="_blank">
                                <img src={require("../../assets/icons/facebook.png")} alt="facebook"/>
                            </a>
                        </div>
                        <div className={classes.Forma}>
                            <h4 className={classes.Naslovi}>Pošaljite nam poruku</h4>
                            <label><strong>Ime</strong> (required)</label>
                            <input type="text"/>
                            <label><strong>Vaš Email</strong> (required)</label>
                            <input type="text"/>
                            <label><strong>Vaša poruka</strong> (required)</label>
                            <textarea rows="4" cols="50"/>
                            <button id="send"><strong>POŠALJI</strong></button>
                        </div>
                    </div>
                </div>
            </Main>
        </Layout>
    )
}

export default Kontakt;
