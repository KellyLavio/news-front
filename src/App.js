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
          <Router history={history}>
            <div>
              <Switch>
                <Route exact path={urls.user.login} component={Login} />
                <Route exact path={urls.user.register} component={Register} />
                <PrivateRoute
                  exact path={urls.user.userpage} component={UserPage}
                />
                <Route exact path="/" component={DefaultPage} />
              </Switch>
            </div>
          </Router>
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }


  // function Nav(props) {
  //   return(
  //    <ThemedButton onClick={props.ChangeTheme}>
  //       Changer de théme
  //     </ThemedButton>
  //   ); 
  // }

  export default App;

