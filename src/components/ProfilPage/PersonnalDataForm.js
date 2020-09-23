import React from 'react';
import { Link } from 'react-router-dom';
import "../../App.css";

const PersonnalDataForm = ({
    name,
    firstname,
    login,
    email
}) => {
    return (
        <div className="row w-100 d-flex justify-content-center mt-5 mb-4">
            <div className="col-md-4">
                <h2 className="text-center text-info">Mes informations personnelles</h2>
                <h4 className="text-primary">Nom</h4>
                <p>{name}</p>
                <h4 className="text-primary">Prénom</h4>
                <p>{firstname}</p>
                <h4 className="text-primary">Login</h4>
                <p>{login}</p>
                <h4 className="text-primary">Email</h4>
                <p>{email}</p>
                <Link
                    to="/profil/edit"
                    className="btn btn-outline-primary"
                    id="profil-btn"
                >
                    Modifier mes informations personnelles
              </Link>
            </div>
        </div>
    );
};

export default PersonnalDataForm;
