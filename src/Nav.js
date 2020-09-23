import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserContext from "./context/UserContext";
import history from "./utils/history";


class Nav extends Component {
  render = () => (
    <UserContext.Consumer>
      {value => {
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
                  <Link className="nav-link" to="/">
                    Accueil <span className="sr-only">(current)</span>
                  </Link>
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
              {value.isLogged ? (
                <div>
                  {/* <div className="text-white">Prénom NOM</div> */}
                  <Link
                    to="/profil"
                    className="btn btn-outline-light"
                    id="profil-btn"
                  >
                    Mon Profil
                  </Link>
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={(e) => {
                      localStorage.clear();
                      history.push("/");
                      value.isLogged = false;
                    }}
                  >
                    Déconnexion
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    to="/register"
                    className="btn btn-outline-light"
                    id="inscription-btn"
                  >
                    Inscription
                  </Link>
                  <Link
                    to="/login"
                    className="btn btn-light"
                    id="connexion-btn"
                  >
                    Connexion
                  </Link>
                </>
              )}
            </div>
          </nav>
        );
      }}

    </UserContext.Consumer>
  );
}

export default Nav;