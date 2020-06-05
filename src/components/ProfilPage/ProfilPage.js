// React
import React from "react";
// dependencies

const ProfilPage = () => {

  return (
    <div className="container-fluid ">
      <div className="row w-100">
        <div className="col p-2 titles">
          <h1>Mon Profil</h1>
        </div>
      </div>
      <div className="row w-100">
        <div className="col-md-6">
          <ul>
            Réglages
            <li>adresse e-mail</li>
            <li>mot de passe</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilPage;