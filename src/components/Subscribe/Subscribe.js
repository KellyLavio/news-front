import React from "react";
import { useForm} from "react-hook-form";

import subscribe from "../../utils/subscribe-utils";
import LoginErrors from "./SubscribeErrorss"
import Nav from "../../Nav";
import { useState } from "react";


const Subscribe = () => {
    const { register, errors, setError, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false);

    const subscribing = data => {
        setLoading(true);

        subscribe(data.name, data.firstname, data.password, data.login, data.email)
            .then(response => {
                if (response.status < 200 || response.status >= 300)
                    throw new Error(response);

                return response.json();
            })
            .then(e => {
                setLoading(false);
            })
            .catch(e => {
                setLoading(false);
                setError("apiServer", "conection", "Une erreur est survenue");
            });
    };


    return (
        <>
        <Nav />
        <h1 className="d-flex justify-content-center">Inscription</h1>
        <div className="container">  
                <div className="row">
                    <form style={{ width: "100%" }} onSubmit={handleSubmit(connect)}>
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-6">
                            <LoginErrors errors={errors} />
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
                </div>
            </div>
        </>
    );
};

export default Subscribe;