import React, { Component } from "react";

class Nav extends Component {
  render = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary sticky-top">
      <a className="navbar-brand" href="#">
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

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Accueil <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"></a>
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
          <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">
            Rechercher
          </button>
        </form>
        <button type="button" className="btn btn-outline-light">
          Inscription
        </button>
        <button
          type="button"
          className="btn btn-light"
          id="connexion-btn"
          data-toggle="modal"
          data-target="#connexionModal"
        >
          Connexion
        </button>

        
      </div>
    </nav>
  );
}

export default Nav;