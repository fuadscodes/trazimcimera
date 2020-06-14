import React, { useState } from "react";
import ToolbarLayout from "../../components/ToolbarLayout/ToolbarLayout";
import classes from './DodajOglas.css';
import Footer from "../../components/Footer/Footer";
import AuthApi from "../../auth-api";
import Cookies from 'js-cookie';
import { useHistory } from "react-router-dom";

const DodajOglas = (props) => {

    const Auth = React.useContext(AuthApi);

    const [address, setAddress] = useState("");
    const [rent, setRent] = useState("");
    const [roomMates, setRoomMates] = useState(0);
    const [description, setDescription] = useState("");

    const handleChangeAddress = (event) => {
        setAddress(event.target.value);
    }

    const handleChangeRent = (event) => {
        setRent(event.target.value);
    }
    const handleChangeRomMates = (event) => {
        setRoomMates(event.target.value);
    }
    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    }

    const [type, setType] = useState(1);
    const user = Cookies.get("user");
    const id = user.toString().split('"')[7];
    const token = user.toString().split('"')[3];

    const handleSubmit = (event) => {
        event.preventDefault();
        if(address === "") {
            alert("Unesite adresu!")
        } else if (roomMates === "") {
            alert("Unesite broj cimera!")
        } else if (rent === "") {
            alert("Unesite cijenu!")
        } else if (description === "") {
            alert("Unesite opis!");
        } else {
            const requestBody = {
                query: `
                mutation {
                    addPost(postInfo: {
                    author: ${parseInt(id)},
                    post_type: ${parseInt(type)},
                    description: ${description}",
                    address: ${address},
                    rent: ${parseInt(rent)},
                    num_of_roommates: ${parseInt(roomMates)},
                    }) {
                    post_id
                    description
                    address
                    rent
                    num_of_roommates
                    author {
                        user_id
                        username
                        name
                        surname
                        city
                        address
                        email
                        bio
                        gender
                        date_of_birth
                        pr_picture_url
                        pref_roommate_num
                    }
                    post_type {
                        post_type_id
                    }
                    }
                }
                `
            };
            
            fetch('http://localhost:4000/graphql', {
                method: "POST",
                body: JSON.stringify(requestBody),
                headers: new Headers({
                    'Authorisation': token
                  }), 
            }).then(res => {
                console.log(res);
                if(res.status !== 200 && res.status !== 201) {
                    throw new Error('Greška!');
                }
                return res.json();
            }).then(resData => {
                console.log(resData);
                /*if(resData.data.login !== null) {
                    setTimeout(function () {
                        alert("Uspješno kreiran novi oglas!");
                    }, 1);
                } else {
                    alert("Unesite obavezna polja!");
                }*/
            }).catch(err => {
                console.log("Error " + err.message);
            });
        }
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
                    <input type="text" onChange={(event) => {handleChangeRomMates(event)}}/>
                    <label><strong>Cijena</strong> (required)</label>
                    <input type="text" onChange={(event) => {handleChangeRent(event)}}/>
                    <label><strong>Vaša oglas</strong> (required)</label>
                    <textarea rows="7" cols="50" onChange={(event) => {handleChangeDescription(event)}}/>
                    <button className={classes.Button} onClick={event => {handleSubmit(event)}}>OBJAVI</button>
                </div>
                <Footer/>
            </div>

        </ToolbarLayout>
    )
}

export default DodajOglas;

/* Napraviti prvo dodavanje bez tipa oglasa */
/* Napraviti i checkbox za tip oglasa postTypePostTypeId */
/* Napraviti dodavanje oglasa i radio buttone u formi */
/* Napraviti dodavanje kontakta u tabelu */
/* Popraviti warninge */
