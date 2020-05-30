import React from "react";
import { Switch, Route } from "react-router-dom";
import Oglasi from "./views/Oglasi/Oglasi";
import Index from "./views/Index/Index";
import Kontakt from "./views/Kontakt/Kontakt";
import Prijava from "./views/Prijava/Prijava";
import Registracija from "./views/Registracija/Registracija";
import DodajOglas from "./views/DodajOglas/DodajOglas";
import AuthApi from "./auth-api";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedLogin from "./ProtectedLogin";

const Routes = () => {
    const Auth = React.useContext(AuthApi);
    return(
        <Switch>
            <Route exact path="/" component={Index}/>
            <ProtectedRoute exact path="/oglasi" auth={Auth.auth} component={Oglasi}/>
            <Route exact path="/kontakt" component={Kontakt}/>
            <ProtectedLogin exact path="/prijava" auth={Auth.auth} component={Prijava}/>
            <Route exact path="/registracija" component={Registracija}/>
            <ProtectedRoute exact path="/dodaj_oglas" auth={Auth.auth} component={DodajOglas}/>
            <Route exact path="/odjava" component={Index}/>
            <Route render={() => <h1>Oops! That page can’t be found.</h1>}/>
        </Switch>
    )
};

export default Routes;
