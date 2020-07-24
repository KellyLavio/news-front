import React, { useEffect, useContext } from 'react';
import UserContext from "./context/UserContext";
import history from "./utils/history";
// import { Component } from "react";


const Nav = () => {
  
  const { isLogged, setIsLogged } = useContext(UserContext);
  
  useEffect(() => {
    setIsLogged(isLogged);
  }, [setIsLogged, isLogged]);
  
  
  // class Nav extends Component {
  //   render = () => (
  //     <UserContext.Consumer>
  //       {value => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary sticky-top">
      <a className="navbar-brand" href="/">
        News Broadcaster
            </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Accueil <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
        <form className="form-inline my-auto mx-auto w-75">
          <input
            className="form-control mr-sm-2 w-75"
            type="search"
            placeholder="Tapez votre mot clé..."
            aria-label="Search"
            size="90"
            max-length="30"
            required
          ></input>
          <button
            className="btn btn-outline-dark my-2 my-sm-0"
            type="submit"
          >
            Rechercher
                </button>
        </form>
        {/* value.isLogged = false; */}
        {isLogged ? (
          <div>
            {/* <div className="text-white">Prénom NOM</div> */}
            <a
              type="button"
              href="/profil"
              className="btn btn-outline-light"
              id="profil-btn"
            >
              Mon Profil
                  </a>
            <button
              type="button"
              className="btn btn-light"
              onClick={(e) => {
                localStorage.clear();
                history.push("/");
                isLogged = false;
              }}
            >
              Déconnexion
                  </button>
          </div>
        ) : (
            <>
              <a
                type="button"
                href="/register"
                className="btn btn-outline-light"
                id="inscription-btn"
              >
                Inscription
                  </a>
              <a
                type="button"
                href="/login"
                className="btn btn-light"
                id="connexion-btn"
              >
                Connexion
                  </a>
            </>
          )}
      </div>
    </nav>
  );
// }}

//     </UserContext.Consumer >
//   );
}

export default Nav;