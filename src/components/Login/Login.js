import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { DoubleBounce } from "better-react-spinkit";

import user from "../Users/Users";
import login from "../../utils/login-utils";



const Login = () => {
  // https://react-hook-form.com/get-started
  const { register, errors, setError, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const connect = data => {
    setLoading(true);

    login(data.login, data.password)
      .then(response => {
        if (response.status < 200 || response.status >= 300)
          throw new Error(response);

        return response.json();
      })
      .then(({ token }) => {
        localStorage.setItem("front-user", token);
        setLoading(false);
      })
      .catch(e => {
        setLoading(false);
        user.setLogged(true);
        // https://react-hook-form.com/api#setError
        setError("apiServer", "connection", "Une erreur est survenue");
      });
  };

  return (
    // <--Connexion Modal-->
          <div className="modal fade" id="connexionModal" tabindex="-1" role="dialog" aria-labelledby="connexionModalLabel"
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
                      <form onSubmit={handleSubmit(connect)}>
                        <div className="form-group">
                          <label for="login">Adresse e-mail</label>
                          <input type="text" className="form-control" id="login" ref={register({ required: true })} aria-describedby="emailHelp"
                            placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                          <label for="password">Mot de passe</label>
                          <input type="password" className="form-control" id="password" ref={register({ required: true })} placeholder="Mot de passe" />
                        </div>
                        <div>
                        {loading && (
                          <div className="">
                          <DoubleBounce />
                        </div>
                        )}
                        {!loading && (
                          <button className="btn btn-primary" disabled={loading}>
                          Connexion
                          </button>
                        )}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
};

export default Login;