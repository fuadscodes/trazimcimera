import React, { useState } from "react";
import ToolbarLayout from "../../components/ToolbarLayout/ToolbarLayout";
import classes from './DodajOglas.css';
import Footer from "../../components/Footer/Footer";

const DodajOglas = (props) => {

    const [autor, setAutor] = useState("");
    const [email, setEmail] = useState("");
    const [brojTelefona, setBrojTelefona] = useState("");

    return (
        <ToolbarLayout>
            <div className={classes.DodajOglas}>
                <div className={classes.Forma}>
                    <h1>Objavi svoj oglas!</h1>
                    <p>Ako želite da objavite svoj oglas i ponudu za cimere, molim Vas ispunite obrazac ispod.</p>
                    <h4>Pošaljite nam poruku</h4>
                    <label><strong>Ime i Prezime</strong> (required)</label>
                    <input type="text"/>
                    <label><strong>Email</strong> (required)</label>
                    <input type="text"/>
                    <label><strong>Broj telefona</strong> (required)</label>
                    <input type="text"/>
                    <label><strong>Vaša oglas</strong> (required)</label>
                    <textarea rows="7" cols="50"/>
                    <button className={classes.Button}>OBJAVI</button>
                </div>
                <Footer/>

            </div>

        </ToolbarLayout>
    )
}

export default DodajOglas;
