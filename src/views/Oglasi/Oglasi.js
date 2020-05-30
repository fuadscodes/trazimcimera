import React, {useEffect, useState} from "react";
import classes from './Oglasi.css';
import Main from "../../components/Main/Main";
import Oglas from "./Oglas/Oglas";
import ToolbarLayout from "../../components/ToolbarLayout/ToolbarLayout";
import AuthApi from "../../auth-api";
import Cookies from 'js-cookie';

const Oglasi = (props) => {

    const [oglasi, setOglasi] = useState([]);
    const Auth = React.useContext(AuthApi);

    useEffect(() => {
        setOglasi([
            {id: 1, text: "Oglas1", telefon: "+387 65 136 937", cijena:"450KM plus režije"},
            {id: 2, text: "Oglas2", telefon: "+387 65 136 937", cijena:"450KM plus režije"},
            {id: 3, text: "Oglas3", telefon: "+387 65 136 937", cijena:"450KM plus režije"},
            {id: 4, text: "Oglas4", telefon: "+387 65 136 937", cijena:"450KM plus režije"}
        ]);
    }, [])

    let sviOglasi = oglasi.map(oglas => {
        return <Oglas
            key={oglas.id}
            text={oglas.text}
            telefon={oglas.telefon}
            cijena={oglas.cijena}
        />
    })
    return (
        <ToolbarLayout>
            <Main>
                <div className={classes.Oglasi}>
                    <h1>Oglasi</h1>
                    {sviOglasi}
                </div>
            </Main>
        </ToolbarLayout>
    )
}

export default Oglasi;
