import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import RegisterErrors from "../Register/RegisterErrors"
import { useState } from "react";
import history from "../../utils/history";
import $ from "jquery";
import { getPersonalData } from "../../services/profilService";
import { updateProfil } from "../../utils/edit-profil-utils";


const EditerProfilPage = () => {
  const { register, errors, setError, handleSubmit } = useForm();
  const [formLoading, setFormLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [personnalData, setPersonnalData] = useState([]);

  const registering = data => {
    setFormLoading(true);

    updateProfil(data.name, data.firstname, data.login, data.email)
      .then(response => {
        if (response.status < 200 || response.status >= 300)
          throw new Error(response);

        return response.json();
      })
      .then(e => {
        setFormLoading(false);
        history.push("/profil");
        $(".toast").toast("show");
      })
      .catch(e => {
        setFormLoading(false);
        setError("apiServer", "connection", "Une erreur est survenue", "Vos informations ont été modifiées");
      });
  };

  useEffect(() => {
    getPersonalData()
      .then((res) => {
        setPersonnalData(res.data);
        setPageLoading(false);
      })
      .catch((err) => console.error(err));
  }, []
  );


  return (
    <>
      <div className="container-fluid">
        <div className="row w-100">
          <div className="col p-2 titles">
            <h1>Modifier mes informations personnelles</h1>
          </div>
        </div>
      </div>

      {pageLoading && (
        <>
          <div className="d-flex justify-content-center mt-5">
            <div className="spinner-grow text-primary" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
          <div className="d-flex justify-content-center text-primary">
            Chargement de vos données en cours...
        </div>
        </>
      )}
      {!pageLoading && (
        <div className="row w-100 d-flex justify-content-center">
          <div className="col-md-6">
            <form style={{ width: "100%" }} onSubmit={handleSubmit(registering)}>
              <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                  <RegisterErrors errors={errors} />
                </div>
              </div>

              <div className="form-group d-flex justify-content-center">
                <div className="col-md-6">
                  <label htmlFor="name" className="text-primary">Nom de Famille</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    ref={register({ required: true })}
                    aria-describedby="nameHelp"
                    defaultValue={personnalData.name}
                  />
                </div>
              </div>

              <div className="form-group d-flex justify-content-center">
                <div className="col-md-6">
                  <label htmlFor="firstname" className="text-primary">Prénom</label>
                  <input
                    type="text"
                    name="firstname"
                    className="form-control"
                    id="firstname"
                    ref={register({ required: true })}
                    aria-describedby="firstNameHelp"
                    defaultValue={personnalData.firstname}
                  />
                </div>
              </div>

              <div className="form-group d-flex justify-content-center">
                <div className="col-md-6">
                  <label htmlFor="login" className="text-primary">Login</label>
                  <input
                    type="text"
                    name="login"
                    className="form-control"
                    id="login"
                    ref={register({ required: true })}
                    aria-describedby="emailHelp"
                    defaultValue={personnalData.login}
                  />
                </div>
              </div>

              <div className="form-group d-flex justify-content-center">
                <div className="col-md-6">
                  <label htmlFor="email" className="text-primary">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    ref={register({ required: true })}
                    aria-describedby="emailHelp"
                    defaultValue={personnalData.email}
                  />
                </div>
              </div>

              <div className="row d-flex justify-content-center">
                {formLoading && (
                  <button className="btn btn-primary" type="button" disabled>
                    <span
                      className="spinner-grow spinner-grow-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  Votre demande est en cours...
                  </button>
                )}
                {!formLoading && (
                  <div>
                    <button
                      className="btn btn-primary" disabled={formLoading}>
                      Mettre à jour
                </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={(e) => {
                        history.push("/profil");
                      }}
                    >
                      Retour
                </button>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      )}

    </>
  );
};

export default EditerProfilPage;