import React, {useState} from "react";
import classes from "./Prijava.css";
import Layout from "../../components/Layout/Layout";
import Main from '../../components/Main/Main';
import AuthApi from "../../auth-api";
import Cookies from 'js-cookie';

const Prijava = (props) => {

    const Auth = React.useContext(AuthApi);

    const [korisnicko_ime, setKorisnicko_ime] = useState("");
    const [lozinka, setLozinka] = useState("");

    const handleChangeUsername = (event) => {
        setKorisnicko_ime(event.target.value);
    }

    const handleChangePassword = (event) => {
        setLozinka(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const requestBody = {
            query: `
                mutation {
                    login(username: "${korisnicko_ime}", password: "${lozinka}") {
                        token
                        id
                        username
                    }
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
                throw new Error('Greška!');
            }
            return res.json();
        }).then(resData => {
            console.log();
            if(resData.data.login !== null) {
                setTimeout(function () {
                    Auth.setAuth(true);
                }, 1);
                Cookies.set("user", {
                    token: resData.data.login.token,
                    id: resData.data.login.id,
                    username: resData.data.login.username
                });
                console.log(Auth);
            } else {
                alert("Pogrešno korisničko ime ili lozinka!");
            }
        }).catch(err => {
            console.log(err);
        });
    }

    return (
        <Layout>
            <Main>
                <div className={classes.Prijava}>
                        <h1>Prijavi se</h1>
                        <div className={classes.Forma}>
                            <label><strong>Korisničko ime</strong> (required)</label>
                            <input
                                type="text"
                                name="korisnicko_ime"
                                value={korisnicko_ime}
                                onChange={handleChangeUsername}
                                required/>
                            <label><strong>Lozinka</strong> (required)</label>
                            <input
                                type="password"
                                value={lozinka}
                                name="lozinka"
                                onChange={handleChangePassword}
                                required
                                minLength={3}/>
                            <button onClick={event => {handleSubmit(event)}}><strong>PRIJAVA</strong></button>
                        </div>
                </div>
            </Main>
        </Layout>
    )
}

export default Prijava;
