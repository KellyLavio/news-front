// React
import React, { useState, useEffect } from "react";
import { getPersonalData } from "../../services/profilService";
import PersonnalDataForm from "./PersonnalDataForm";
import FavoritesData from "./FavoritesData";


const ProfilPage = () => {
  const [personnalData, setPersonnalData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    getPersonalData()
      .then((res) => {
        setPersonnalData(res.data);
        setLoading(false);
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
      {loading && (
        <>
        <div className="d-flex justify-content-center mt-5">
          <div className="spinner-grow text-primary" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
        <div className="d-flex justify-content-center text-primary">
          Chargement de votre profil en cours...
        </div>
        </>
      )}
      {!loading && (
        <>
          <PersonnalDataForm
            name={personnalData.name}
            firstname={personnalData.firstname}
            login={personnalData.login}
            email={personnalData.email}
          />
          <FavoritesData
            favorites={personnalData.favorites}
          />
        </>
      )}
    </div>
  );
};

export default ProfilPage;