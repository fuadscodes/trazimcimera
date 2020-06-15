import React, { useState } from 'react';
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import AuthApi from './auth-api';
import Cookies from 'js-cookie';
import ApolloProvider from './components/ApolloProvider';

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
      <ApolloProvider>
        <Router>
            <Routes/>        
        </Router>
      </ApolloProvider>
    </AuthApi.Provider>
  );
}

export default App;
