import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from 'react-router-dom';
import { tokenName } from '../../utils/constants';
// import user from "../Users/Users";
import login from "../../utils/login-utils";
import LoginErrors from "./LoginErrors";




const LoginModal = () => {
  // https://react-hook-form.com/get-started
  const { register, errors, setError, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [logged, setIsLogged] = useState(false);

  const connect = data => {
    setLoading(true);

    login(data.login, data.password)
      .then(response => {
        if (response.status < 200 || response.status >= 300)
          throw new Error(response);

        return response.json();
      })
      .then(({ token }) => {
        localStorage.setItem(tokenName, token);
        setIsLogged(true);
        setLoading(false);
      })
      .catch(e => {
        setLoading(false);
        setIsLogged(false);
        // https://react-hook-form.com/api#setError
        setError("apiServer", "connection", "Une erreur est survenue");
      });
  };

  return (
    // <--Connexion Modal-->
    <div className="modal fade" id="connexionModal" tabIndex="-1" role="dialog" aria-labelledby="connexionModalLabel"
      aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="connexionModalLabel">Connexion</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="row">
                <form style={{ width: "100%" }} onSubmit={handleSubmit(connect)}>
                  <LoginErrors errors={errors} />
                  <div className="form-group">
                    <label htmlFor="login">Login</label>
                    <input
                      type="text"
                      name="login"
                      className="form-control"
                      id="login"
                      ref={register({ required: true })}
                      aria-describedby="emailHelp"
                      placeholder="Entrer votre login"
                    />
                  </div>
                  <div className="form-group">
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
                  <div className="text-center">
                    {loading && (
                      <div className="btn btn-primary">
                        <div className="spinner-border text-success" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                    )}
                    {!loading && (
                      <button className="btn btn-primary" disabled={loading}>
                        Connexion
                      </button>
                    )}
                  </div>
                </form>
                {logged && (
                  <Redirect to="/userPage" />
                )}
                {!logged && (
                  <Redirect to="/" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;