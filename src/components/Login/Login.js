import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { DoubleBounce } from "better-react-spinkit";
import { Redirect } from 'react-router-dom';

// import user from "../Users/Users";
import login from "../../utils/login-utils";
import LoginErrors from "./LoginErrors";
import UserContext from "../../context/UserContext";
import { tokenName } from '../../utils/constants';
import Nav from "../../Nav";



const Login = () => {
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
        <>
            <Nav />
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <h1>Connexion</h1>
                </div>
                <div className="row">
                    <form style={{ width: "100%" }} onSubmit={handleSubmit(connect)}>
                        <LoginErrors errors={errors} />
                        <div className="form-group d-flex justify-content-center">
                            <div className="col-md-6">
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
                        </div>
                    </form>
                    {logged && (
                        <Redirect to="/userPage" />
                    )}
                </div>
            </div>
        </>
    );
};

export default Login;