import React, { useState } from "react";
import ToolbarLayout from "../../components/ToolbarLayout/ToolbarLayout";
import classes from './DodajOglas.css';
import Footer from "../../components/Footer/Footer";
import AuthApi from "../../auth-api";
import Cookies from 'js-cookie';
import { useHistory } from "react-router-dom";
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'


const DodajOglas = (props) => {

    const POST_MUTATION = gql`
        mutation {
            addPost(postInfo: {
            author: $id,
            post_type: $type,
            description: $description,
            address: $address,
            rent: $rent,
            num_of_roommates: $roomMates,
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
        

    const Auth = React.useContext(AuthApi);

    const [address, setAddress] = useState("");
    const [rent, setRent] = useState("");
    const [roomMates, setRoomMates] = useState(0);
    const [description, setDescription] = useState("");

    const handleChangeAddress = (event) => {
        setAddress(event.target.value);
    }

    const handleChangeRent = (event) => {
        setRent(parseInt(event.target.value));
    }
    const handleChangeRomMates = (event) => {
        setRoomMates(parseInt(event.target.value));
    }
    const handleChangeDescription = (event) => {
        setDescription(event.target.value);
    }

    const [type, setType] = useState(1);
    const user = Cookies.get("user");
    const id = parseInt(user.toString().split('"')[7]);
    const token = parseInt(user.toString().split('"')[3]);

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
                    author: 59,
                    post_type: 1,
                    description: "nesto",
                    address: "address",
                    rent: 200,
                    num_of_roommates: 2
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
                context: {headers: {
                    "authorization": token
                  }, 
                }
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

                    <label><strong>Adresa</strong> *obavezno*</label>
                    <input type="text" onChange={(event) => {handleChangeAddress(event)}}/>
                    <label><strong>Broj cimera</strong> *obavezno*</label>
                    <input type="text" onChange={(event) => {handleChangeRomMates(event)}}/>
                    <label><strong>Cijena</strong> *obavezno*</label>
                    <input type="text" onChange={(event) => {handleChangeRent(event)}}/>
                    <label><strong>Vaš oglas</strong> *obavezno*</label>
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
