import React, { useState } from 'react';
import ToolbarLayout from '../../components/ToolbarLayout/ToolbarLayout';
import classes from './DodajOglas.css';
import Footer from '../../components/Footer/Footer';
import AuthApi from '../../auth-api';
import Cookies from 'js-cookie';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useHistory } from "react-router-dom";

const addPostMutation = gql`
  mutation addPost($postInfo: PostInfo) {
    addPost(postInfo: $postInfo) {
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
`;

const addPostMutationOptions = ({ variables, context }) => ({
  variables: { ...variables },
  context: { ...context },
});

const DodajOglas = (props) => {
  const onCompleted = (data) => {
    console.log('Objava dodana uspješno!');
    console.log(data);
    history.push('/oglasi');
  };

  const onError = (err) => {
    console.log('Došlo je do greške. Radimo na tome!');
    console.log(err);
  };

  const [submitPost] = useMutation(addPostMutation, {
    onCompleted,
    onError,
  });

  const history = useHistory();
  const Auth = React.useContext(AuthApi);

  const [address, setAddress] = useState('');
  const [rent, setRent] = useState('');
  const [roomMates, setRoomMates] = useState(0);
  const [description, setDescription] = useState('');

  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };

  const handleChangeRent = (event) => {
    setRent(parseInt(event.target.value));
  };
  const handleChangeRomMates = (event) => {
    setRoomMates(parseInt(event.target.value));
  };
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const [type, setType] = useState(1);
  const user = Cookies.get('user');
  const userObject = JSON.parse(user);

  let { id, token } = userObject;
  id = parseInt(id);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (address === '') {
      alert('Unesite adresu!');
    } else if (roomMates === '') {
      alert('Unesite broj cimera!');
    } else if (rent === '') {
      alert('Unesite cijenu!');
    } else if (description === '') {
      alert('Unesite opis!');
    } else {
      const postInfo = {
        author: id,
        post_type: type,
        address,
        rent,
        description,
        num_of_roommates: roomMates,
      };

      const opts = {
        variables: { postInfo },
        context: { headers: { authorization: token } },
      };

      submitPost(addPostMutationOptions(opts));
    }
  };

  return (
    <ToolbarLayout>
      <div className={classes.DodajOglas}>
        <div className={classes.Forma}>
          <h1>Objavi svoj oglas!</h1>
          <p>
            Ako želite da objavite svoj oglas i ponudu za cimere, molim Vas
            ispunite obrazac ispod.
          </p>
          <h4>Pošaljite nam poruku</h4>

          <label>
            <strong>Adresa</strong> *obavezno*
          </label>
          <input
            type='text'
            onChange={(event) => {
              handleChangeAddress(event);
            }}
          />
          <label>
            <strong>Broj cimera</strong> *obavezno*
          </label>
          <input
            type='text'
            onChange={(event) => {
              handleChangeRomMates(event);
            }}
          />
          <label>
            <strong>Cijena</strong> *obavezno*
          </label>
          <input
            type='text'
            onChange={(event) => {
              handleChangeRent(event);
            }}
          />
          <label>
            <strong>Vaš oglas</strong> *obavezno*
          </label>
          <textarea
            rows='7'
            cols='50'
            onChange={(event) => {
              handleChangeDescription(event);
            }}
          />
          <button
            className={classes.Button}
            onClick={(event) => {
              handleSubmit(event);
            }}
          >
            OBJAVI
          </button>
        </div>
        <Footer />
      </div>
    </ToolbarLayout>
  );
};

export default DodajOglas;

/* Napraviti prvo dodavanje bez tipa oglasa */
/* Napraviti i checkbox za tip oglasa postTypePostTypeId */
/* Napraviti dodavanje oglasa i radio buttone u formi */
/* Napraviti dodavanje kontakta u tabelu */
/* Popraviti warninge */
