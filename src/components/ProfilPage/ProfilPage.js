// React
import React from "react";
// dependencies

const ProfilPage = () => {

  return (
    <div className="container-fluid">
      <div className="row w-100">
        <div className="col p-2 titles">
          <h1>Mon Profil</h1>
        </div>
      </div>
      <div className="row w-100" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="col-md-6">
          <ul>
            <li><h3>Login</h3><p>Adam1</p></li>
            <li><h3>Prénom</h3><p>Adam</p></li>
            <li><h3>Nom de Famille</h3><p>First</p></li>
            <li><h3>E-mail</h3><p>adam.first@gmail.com</p></li>
            <li><h3>Mot de passe</h3><p>***</p></li>
            <p>
              <a
                type="button"
                href="/profil/edit"
                className="btn btn-outline-dark"
                id="profil-btn"
              >
                Editer mon profil
              </a>
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilPage;