// React
import React, { useState } from "react";

import UserContext from "./context/UserContext";
import { tokenName, urls } from "./utils/constants";
import { Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";
import history from "./utils/history";

import DefaultPage from "./components/DefaultPage/Defaultpage";

import "./App.css";
import UserPage from "./components/Users/UserPage";

import ThemeContext from './context/ThemeContext';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Nav from "./Nav";
import ProfilPage from "./components/ProfilPage/ProfilPage";

const App = () => {
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem(tokenName) !== null
  );
  // Mon username contiendra le login de l'utilisateur connecté
  // On va le récupérer via l'API, ceci nous permettra de vérifier que l'utilisateur a un token valide et non expiré
  const [username, setUsername] = useState(null);

  const [theme, setTheme] = useState('dark');

  // const toggleTheme = () => {
  //   if (theme === 'light') {
  //     setTheme('dark');
  //   } else {
  //     setTheme('light');
  //   }


    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <UserContext.Provider
          value={{ isLogged, setIsLogged, username, setUsername }}
        >
          <div>
            <Nav />
            <div
              style={{
                position: "relative",
              }}
            >
              <Router history={history}>
                <Switch>
                  <Route exact path={urls.user.login} component={Login} />
                  <Route exact path={urls.user.register} component={Register} />
                  <PrivateRoute
                    exact
                    path={urls.user.profilpage}
                    component={ProfilPage}
                  />
                  <PrivateRoute
                    exact
                    path={urls.user.userpage}
                    component={UserPage}
                  />
                  <Route exact path="/" component={DefaultPage} />
                </Switch>
                <div
                  className="toast"
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    backgroundColor: "#28a745",
                    zIndex: "1021",
                  }}
                >
                  <div className="toast-header">
                    <img
                      src={process.env.PUBLIC_URL + "/images/thumbs-up.png"}
                      className="rounded mr-2"
                      alt="thumbs-up"
                      style={{ width: "25px", height: "25px" }}
                    />
                    <strong className="mr-auto">News Broadcaster</strong>
                    <button
                      type="button"
                      className="ml-2 mb-1 close"
                      data-dismiss="toast"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="toast-body">Inscription enregistrée !</div>
                </div>
              </Router>
            </div>
          </div>
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }

  export default App;

