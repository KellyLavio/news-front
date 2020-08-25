// React
import React, { useState } from "react";
import { useEffect } from "react";
import { getPersonalData } from "../../services/profilService";
import PersonnalDataForm from "./PersonnalDataForm";


const ProfilPage = () => {
  const [personnalData, setPersonnalData] = useState([]);

  useEffect(() => {
    getPersonalData()
      .then((res) => {
        setPersonnalData(res.data);
      })
      .catch((err) => console.error(err));
  }, []
  );


  return (
    <div className="container-fluid">
      <div className="row w-100">
        <div className="col p-2 titles">
          <h1>Mon Profil</h1>
        </div>
      </div>
      <div className="row w-100" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="col-md-6">
                <h4>Nom</h4>
                <p>{personnalData.name}</p>
                <h4>Prénom</h4>
                <p>{personnalData.firstname}</p>
                <h4>Login</h4>
                <p>{personnalData.login}</p>
                <h4>Email</h4>
                <p>{personnalData.email}</p>
            </div>
        </div>
    </div>
  );
};

export default ProfilPage;