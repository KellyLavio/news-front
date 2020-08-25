import React from 'react';
import "../../App.css";

const PersonnalDataForm = ({
    name,
    firstname,
    login,
    email
}) => {
    return (
        <div className="row w-100" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="col-md-6">
                <h4>Nom</h4>
                <p>{name}</p>
                <h4>Prénom</h4>
                <p>{firstname}</p>
                <h4>Login</h4>
                <p>{login}</p>
                <h4>Email</h4>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default PersonnalDataForm;
