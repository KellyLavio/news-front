import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { DoubleBounce } from "better-react-spinkit";

// import user from "../Users/Users";
import login from "../../utils/login-utils";
import LoginErrors from "./LoginErrors";
import UserContext from "../../context/UserContext";
import { tokenName } from '../../utils/constants';



const Login = () => {
  // https://react-hook-form.com/get-started
  const { register, errors, setError, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const user = useContext(UserContext);

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
        user.setIsLogged(true);
        setLoading(false);
      })
      .catch(e => {
        setLoading(false);
        user.setIsLogged(false);
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
                        <LoginErrors errors={errors} />
                        <div className="form-group">
                          <label for="login">Login</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            id="login" 
                            ref={register({ required: true })} 
                            aria-describedby="emailHelp"
                            placeholder="Entrer votre login" 
                          />
                        </div>
                        <div className="form-group">
                          <label for="password">Mot de passe</label>
                          <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            ref={register({ required: true })} 
                            placeholder="Mot de passe" 
                          />
                        </div>
                        <div className="text-center">
                        {loading && (
                          <div className="d-flex justify-content-center">
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