// React
import React, { useState, useEffect } from "react";
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
      <PersonnalDataForm 
        name = {personnalData.name}
        firstname = {personnalData.firstname}
        login = {personnalData.login}
        email = {personnalData.email}
      />
    </div>
  );
};

export default ProfilPage;