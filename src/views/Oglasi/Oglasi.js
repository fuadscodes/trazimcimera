import React, {useEffect, useState} from "react";
import classes from './Oglasi.css';
import Main from "../../components/Main/Main";
import Oglas from "./Oglas/Oglas";
import ToolbarLayout from "../../components/ToolbarLayout/ToolbarLayout";
import AuthApi from "../../auth-api";
import Cookies from 'js-cookie';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const Oglasi = (props) => {

    const [imamStan, setImamStatn] = useState(true);
    const [oglasi, setOglasi] = useState([]);
    const Auth = React.useContext(AuthApi);

    const OGLASI_QUERY = gql`
    query ImpressionsQuery {
        impressions {
            impression_id
            contact {
                contact_id
                name
                email
                message
            }
        }
    }
`;

    return (
        <ToolbarLayout>
            <Main>
                <div className={classes.Oglasi}>
                    <div className={classes.Buttons}>
                        <button>IMAM STAN</button>
                        <button>NEMAM STAN</button>
                    </div>
                    <h1>Oglasi</h1>
                </div>
            </Main>
        </ToolbarLayout>
    )
}

export default Oglasi;
