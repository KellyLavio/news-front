// React
import React, { useState } from "react";

import UserContext from "./context/UserContext";
import { tokenName, urls } from "./utils/constants";
import { Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";
import history from "./utils/history";

import DefaultPage from "./components/DefaultPage/Defaultpage";
import Users from "./components/Users/Users";

import "./App.css";
import LoginModal from "./components/Login/LoginModal";
import UserPage from "./components/Users/UserPage";

import ThemeContext from './ThemeContext';
import ThemedButton from './Themed-button';


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

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  
  
  return (    
    <ThemeContext.Provider theme={theme === 'light' ? light : dark}>
    <UserContext.Provider
      value={{ isLogged, setIsLogged, username, setUsername }}>
      <Router history={history}>
        <div>
          <Switch>
            <PrivateRoute exact path={urls.user.list} component={Users} />
            <Route exact path={urls.user.login} component={UserPage} />
            <Route exact path="/" component={DefaultPage} />
          </Switch>
        </div>
        <LoginModal/>
      </Router>
    </UserContext.Provider>
    </ThemeContext.Provider>
  );
  }


function Nav(props) {
  return(
   <ThemedButton onClick={props.ChangeTheme}>
      Changer de théme
    </ThemedButton>
  ); 
}

export default App;

