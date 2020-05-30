import React, {useState} from "react";
import classes from './Registracija.css';
import Layout from "../../components/Layout/Layout";
import Main from "../../components/Main/Main";
import { useHistory } from "react-router-dom";

const Registracija = (props) => {

    let history = useHistory();

    const [ime, setIme] = useState("");
    const [prezime, setPrezime] = useState("");
    const [datum_rodjenja, setDatum_rodjenja] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [grad, setGrad] = useState("");
    const [adresa, setAdresa] = useState("");
    const [pozeljni_broj_cimera, setPozeljni_broj_cimera] = useState(0);
    const [opis, setOpis] = useState("");
    //const [slika_url, setSlika_url] = useState("");

    const [selectedFile, setSelectedFile] = useState(null);

    const fileSelectedHandler = (event) => {
        setSelectedFile(event.target.files[0]);
    }

    const handleNameChange = (event) => {
        setIme(event.target.value);
    }

    const handleLastNameChange = (event) => {
        setPrezime(event.target.value);
    }

    const handleDateChange = (event) => {
        setDatum_rodjenja(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleCityChange = (event) => {
        setGrad(event.target.value);
    }

    const handleAddressChange = (event) => {
        setAdresa(event.target.value);
    }

    const handleNumberChange = (event) => {
        setPozeljni_broj_cimera(parseInt(event.target.value));
    }

    const handleTextChange= (event) => {
        setOpis(event.target.value);
    }

    const registrationHandler = (event) => {
        event.preventDefault();
            if(ime === "") {
                alert("Unesite ime!")
            } else if (prezime === "") {
                alert("Unesite prezime!")
            } else if (datum_rodjenja === "") {
                alert("Unesite datum rođenja!")
            } else if (email === "") {
                alert("Unesite email!");
            } else if (password === "") {
                alert("Unesite lozinku!");
            } else if (grad === "") {
                alert("Unesite grad!");
            } else if (adresa === "") {
                alert("Unesite adresu!");
            } else if (pozeljni_broj_cimera === 0) {
                alert("Unesite broj cimera!");
            } else if (opis === "") {
                alert("Unesite kratki opis!");
            } else {
                const requestBody = {
                    query: `
                        mutation {
                            register(user: {
                                username: "${username}", 
                                password: "${password}",
                                name: "${ime}",
                                surname: "${prezime}",
                                city: "${grad}",
                                address: "${adresa}",
                                email: "${email}",
                                bio: "${opis}",
                                date_of_birth: "${datum_rodjenja}",
                                pref_roommate_num: ${parseInt(pozeljni_broj_cimera)}
                            })
                        }
                    `
                };
        
                fetch('http://localhost:4000/graphql', {
                    method: "POST",
                    body: JSON.stringify(requestBody),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res => {
                    if(res.status !== 200 && res.status !== 201) {
                        alert("Greška pri registraciji!");
                        throw new Error('Greška!');
                    }
                    return res.json();
                }).then(resData => {
                    if(resData.data.register) {
                        alert(resData.data.register);
                        history.push("/prijava");
                    }
                }).catch(err => {
                    alert("Greška pri registraciji!");
                });
            }
        };

    return (
        <Layout>
            <Main>
                <div>
                    <h1>Registracija</h1>
                    <p className={classes.text}>Pridruživanjem našoj zajednici dobijate mogućnost da objavljujete oglase na našoj stranici! </p>
                    <div className={classes.Forma}>
                        <label><strong>Ime</strong> (required)</label>
                        <input
                            type="text"
                            value={ime}
                            onChange={handleNameChange}
                            required/><label><strong>Prezime</strong> (required)</label>
                        <input
                            type="text"
                            value={prezime}
                            onChange={handleLastNameChange}/>
                            <label><strong>Datum rođenja</strong> (required)</label>
                        <input
                            type="date"
                            value={datum_rodjenja}
                            className={classes.Date}
                            onChange={handleDateChange}/>
                            <label><strong>Email</strong> (required)</label>
                        <input
                            type="text"
                            value={email}
                            onChange={handleEmailChange}/>
                            <label><strong>Korisničko ime</strong> (required)</label>
                        <input
                            type="text"
                            value={username}
                            onChange={handleUsernameChange}/>
                            <label><strong>Lozinka</strong> (required)</label>
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}/>
                            <label><strong>Grad</strong> (required)</label>
                        <input
                            type="text"
                            value={grad}
                            onChange={handleCityChange}/>
                            <label><strong>Adresa stanovanja</strong> (required)</label>
                        <input
                            type="text"
                            value={adresa}
                            onChange={handleAddressChange}/>
                            <label><strong>Sa koliko cimera bi živjeli?</strong></label>

                        <div className={classes.CheckBox}>
                            <input type="checkbox" id="1" name="broj" value="1" onClick={handleNumberChange}/>
                            <label htmlFor="1">1</label>
                        </div>
                        <div className={classes.CheckBox}>
                            <input type="checkbox" id="2" name="broj" value="2" onClick={handleNumberChange}/>
                            <label htmlFor="2">2</label>
                        </div>
                        <div className={classes.CheckBox}>
                            <input type="checkbox" id="3" name="broj" value="3" onClick={handleNumberChange}/>
                            <label htmlFor="3">3</label>
                        </div>
                        <div className={classes.CheckBox}>
                            <input type="checkbox" id="4" name="broj" value="4" onClick={handleNumberChange}/>
                            <label htmlFor="4">4</label>
                        </div>
                        <div className={classes.CheckBox}>
                            <input type="checkbox" id="5" name="broj" value="5" onClick={handleNumberChange}/>
                            <label htmlFor="5">5</label>
                        </div>

                        <label><strong>Nešto više o vama</strong></label>
                        <textarea rows="8" cols="15" value={opis} onChange={handleTextChange}/><br/>

                        {/*<input type="file" onChange={fileSelectedHandler} className={classes.Image}/>*/}

                        <button onClick={event => {registrationHandler(event)}}><strong>REGISTRUJ SE</strong></button>
                    </div>
                </div>
            </Main>
        </Layout>
    )
}

export default Registracija;
