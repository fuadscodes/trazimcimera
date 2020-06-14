import React, { useState } from "react";
import ToolbarLayout from "../../components/ToolbarLayout/ToolbarLayout";
import classes from './DodajOglas.css';
import Footer from "../../components/Footer/Footer";

const DodajOglas = (props) => {

    const [author, setAuthor] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [rent, setRent] = useState("");
    const [roomMates, setRoomMates] = useState(0);
    const [description, setDescription] = useState("");

    const handleChangeAddress = (event) => {
        setAddress(event.target.value);
        console.log(address);
    }

    const handleChangeAuthor = (event) => {
        setAuthor(event.target.value);
        console.log(author);
    }
    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
        console.log(email);
    }

    const handleChangeRent = (event) => {
        setRent(event.target.value);
        console.log(rent);
    }
    const handleChangeRomMates = (event) => {
        setRoomMates(event.target.value);
        console.log(roomMates);
    }
    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
        console.log(description);
    }

    
    return (
        <ToolbarLayout>
            <div className={classes.DodajOglas}>
                
                <div className={classes.Forma}>
                    <h1>Objavi svoj oglas!</h1>
                    <p>Ako želite da objavite svoj oglas i ponudu za cimere, molim Vas ispunite obrazac ispod.</p>
                    <h4>Pošaljite nam poruku</h4>
                    <label><strong>Adresa</strong> (required)</label>
                    <input type="text" onChange={(event) => {handleChangeAddress(event)}}/>
                    <label><strong>Broj cimera</strong> (required)</label>
                    <input type="text" onChange={(event) => {handleChangeAddress(event)}}/>
                    <label><strong>Cijena</strong> (required)</label>
                    <input type="text" onChange={(event) => {handleChangeAddress(event)}}/>
                    <label><strong>Vaša oglas</strong> (required)</label>
                    <textarea rows="7" cols="50" onChange={(event) => {handleChangeAddress(event)}}/>
                    <button className={classes.Button}>OBJAVI</button>
                </div>
                <Footer/>

            </div>

        </ToolbarLayout>
    )
}

export default DodajOglas;

/* Napraviti prvo dodavanje bez tipa oglasa */
/* Napraviti formu za oglase sa normalnim vrijednostima koje trebaju za ispis */
/* Dodati nekoliko oglasa */
/* Napraviti i checkbox za tip oglasa postTypePostTypeId */
