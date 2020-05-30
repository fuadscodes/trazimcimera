import React, { useState } from 'react';
import Routes from "./routes";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from "react-router-dom";
import AuthApi from './auth-api';
import Cookies from 'js-cookie';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

function App() {
  const [auth, setAuth] = useState(false);

  const readCookie = () => {
    const user = Cookies.get("user");

    if(user) {
      setAuth(true);
    }
  }

  React.useEffect(() => {
    readCookie();
  }, [])

  return (
    <AuthApi.Provider value={{auth, setAuth}}>
      <ApolloProvider client={client}>
        <Router>
            <Routes/>        
        </Router>
      </ApolloProvider>
    </AuthApi.Provider>
  );
}

export default App;
