import React from 'react';
import "../../App.css";

const PersonnalDataForm = ({
    name,
    firstname,
    login,
    email
}) => {
    return (
        <div className="row w-100 d-flex justify-content-center">
            <div className="col-md-4">
                <h4 className="text-primary">Nom</h4>
                <p>{name}</p>
                <h4 className="text-primary">Prénom</h4>
                <p>{firstname}</p>
                <h4 className="text-primary">Login</h4>
                <p>{login}</p>
                <h4 className="text-primary">Email</h4>
                <p>{email}</p>
                <a
                type="button"
                href="/profil/edit"
                className="btn btn-outline-primary"
                id="profil-btn"
              >
                Editer mon profil
              </a>
            </div>
        </div>
    );
};

export default PersonnalDataForm;
