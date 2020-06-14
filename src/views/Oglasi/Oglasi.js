import React, { useState } from "react";
import classes from './Oglasi.css';
import Main from "../../components/Main/Main";
import Oglas from "./Oglas/Oglas";
import ToolbarLayout from "../../components/ToolbarLayout/ToolbarLayout";
import Cookies from 'js-cookie';
import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';
 

const Oglasi = (props) => {

    const POSTS_QUERY = gql`
    query {
        posts {
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
}`;

    const [type, setType] = useState(2);
    const user = Cookies.get("user");
    const token = user.toString().split('"')[3];

    const { loading, error, data } = useQuery(POSTS_QUERY, {
        context: {
            headers: {
                "Authorization": token
            }
        }
    })

    if (loading) return <p>Učitavanje...</p>
    if (error) return <p>{`Greška: ${error.message}`}</p>

    return (
        <ToolbarLayout>
            <Main>
                <div className={classes.Oglasi}>
                    <h1>Oglasi</h1>
                    <div className={classes.Buttons}>
                        <button onClick={() => {setType(2)}}>IMAM STAN</button>
                        <button onClick={() => {setType(1)}}>NEMAM STAN</button>
                    </div>
                    <div className={classes.ListaMisljenja}>
                        {
                            data.posts.map(post => {
                                if(post.post_type.post_type_id == type) {
                                    return <Oglas 
                                    text={post.description}
                                    brojCimera={post.num_of_roommates}
                                    cijena={post.rent}
                                    email={post.author.email}
                                    adresa={post.address}
                                    />
                                }
                            })
                        }
                    </div>
                </div>
            </Main>
        </ToolbarLayout>
    )
}

export default Oglasi;
