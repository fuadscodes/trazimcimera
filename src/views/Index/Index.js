import React, {useState, Fragment} from "react";
import classes from './Index.css';
import Layout from "../../components/Layout/Layout";
import Misljenje from "../../components/Misljenje/Misljenje";
import {NavLink} from "react-router-dom";
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const IMPRESSIONS_QUERY = gql`
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

const Index = (props) => {
    
    return (
        <Layout>
            <div className={classes.Main}>
                <div className={classes.Friends}>
                    <p>Ako imate stan koji iznajmljujete ili tražite stan i treba vam neko da
                        bi s njim podijelili troškove stanovanja, na pravom ste mjestu !</p>
                    <NavLink to="/prijava">
                        <button className={classes.Prijava}><strong>PRIJAVI SE</strong></button>
                    </NavLink>
                </div>
                <div className={classes.Misljenja}>
                    <h1>Šta korisnici naših usluga kažu o nama?</h1>
                    <div className={classes.ListaMisljenja}>
                        <Query query={IMPRESSIONS_QUERY}>
                            {({ loading, error, data }) => {
                                if (loading) return <h4>Učitavanje...</h4>;
                                if (error) console.log(error);

                                return <Fragment>
                                    {
                                        data.impressions.map(impression => (
                                            <Misljenje oglas={impression}></Misljenje>
                                        ))
                                    }
                                </Fragment>
                            }}
                        </Query>
                    </div>
                </div>
                <div className={classes.Studenti}>

                </div>
                <div className={classes.Footer}>
                    <div>
                        <p className={classes.Pitanje}><strong>Još se niste registrovali ?</strong></p>
                    </div>
                    <div className={classes.Registracija}>
                        <p className={classes.Text}>Pridružite se našoj zajednici i upoznajte nove ljude koji bi Vam mogli biti
                            potencijalni cimeri. Objavljujte na našoj stranici oglase i nađite ono
                            što Vam treba !</p>
                        <NavLink to="/registracija">
                            <button><strong>REGISTRUJ SE</strong></button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Index;
