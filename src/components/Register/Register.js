import React from "react";
import { useForm} from "react-hook-form";
import { userRegister } from "../../utils/register-utils";
import RegisterErrors from "./RegisterErrors"
import { useState } from "react";
import history from "../../utils/history";
import $ from "jquery";


const Register = () => {
    const { register, errors, setError, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);
    const registering = data => {
        setLoading(true);

        userRegister(data.login, data.firstname, data.name, data.email, data.password)
            .then(response => {
                if (response.status < 200 || response.status >= 300)
                    throw new Error(response);

                return response.json();
            })
            .then(e => {
                setLoading(false);
                history.push("/login");
                $(".toast").toast("show");
            })
            .catch(e => {
                setLoading(false);
                setError("apiServer", "connection", "Une erreur est survenue");
            });
    };


  return (
    <>
      <h1 className="d-flex justify-content-center">Inscription</h1>
      <div className="container">
        <div className="row">
          <form style={{ width: "100%" }} onSubmit={handleSubmit(registering)}>
            <div className="row d-flex justify-content-center">
              <div className="col-md-6">
                <RegisterErrors errors={errors} />
              </div>
            </div>
            <div className="form-group d-flex justify-content-center">
              <div className="col-md-6">
                <label htmlFor="login">Login</label>
                <input
                  type="text"
                  name="login"
                  className="form-control"
                  id="login"
                  ref={register({ required: true })}
                  aria-describedby="loginHelp"
                  placeholder="Entrer votre login"
                />
              </div>
            </div>
            <div className="form-group d-flex justify-content-center">
              <div className="col-md-6">
                <label htmlFor="firstname">Prénom</label>
                <input
                  type="text"
                  name="firstname"
                  className="form-control"
                  id="firstname"
                  ref={register({ required: true })}
                  aria-describedby="firstNameHelp"
                  placeholder="Entrer votre prénom"
                />
              </div>
            </div>
            <div className="form-group d-flex justify-content-center">
              <div className="col-md-6">
                <label htmlFor="name">Nom de Famille</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  ref={register({ required: true })}
                  aria-describedby="nameHelp"
                  placeholder="Entrer votre nom de famille"
                />
              </div>
            </div>
            <div className="form-group d-flex justify-content-center">
              <div className="col-md-6">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  ref={register({ required: true })}
                  aria-describedby="emailHelp"
                  placeholder="Entrer votre e-mail"
                />
              </div>
            </div>
            <div className="form-group d-flex justify-content-center">
              <div className="col-md-6">
                <label htmlFor="password">Mot de passe</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  ref={register({ required: true })}
                  placeholder="Mot de passe"
                />
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              {loading && (
                <button className="btn btn-primary" type="button" disabled>
                  <span
                    className="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>{" "}
                  Votre demande est en cours...
                </button>
              )}
              {!loading && (
                <button
                  className="btn btn-primary" disabled={loading}>
                  S'inscrire
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;