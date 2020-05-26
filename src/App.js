// React
import React, { useState } from "react";

import Login from "./components/Login/Login"
import UserContext from "./context/UserContext";
import { tokenName, urls } from "./utils/constants";
import { Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";
import history from "./utils/history";

import DefaultPage from "./components/DefaultPage/Defaultpage";
import Users from "./components/Users/Users";

import "./App.css";

// components
// import Nav from "./Nav";
// import MainContainer from "./MainContainer";


const App = () => {
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem(tokenName) !== null
  );
  // Mon username contiendra le login de l'utilisateur connecté
  // On va le récupérer via l'API, ceci nous permettra de vérifier que l'utilisateur a un token valide et non expiré
  const [username, setUsername] = useState(null);

  return (
    
    <UserContext.Provider
      value={{ isLogged, setIsLogged, username, setUsername }}>
      <Router history={history}>
        <div>
          <Switch>
            <PrivateRoute exact path={urls.user.list} component={Users} />

            <Route exact path={urls.user.login} component={Login} />
            <Route exact path="/" component={DefaultPage} />
          </Switch>
        </div>
      </Router>
</UserContext.Provider>
  );
};


export default App;

