import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getCategories, getSources } from "../../services/favoriteService";
import { getPersonalData } from "../../services/profilService";
import { FAVORITE_CATEGORY, FAVORITE_SOURCE } from "../../utils/constants";
import { getValue } from "../../utils/favorites-utils";
import history from "../../utils/history";

const EditFavorites = () => {
    const { register, handleSubmit } = useForm();
    const [categories, setCategories] = useState([]);
    const [sources, setSources] = useState([]);
    const [personnalFavorites, setPersonnalFavorites] = useState([]);
    const [favoritesLoading, setFavoritesLoading] = useState(true);
    const [categoryLoading, setCategoryLoading] = useState(true);
    const [sourceLoading, setSourceLoading] = useState(true);
    const [formLoading, setFormLoading] = useState(false);


    const registering = () => {
        setFormLoading(true)
    }

    useEffect(() => {
        getPersonalData()
            .then((res) => {
                setPersonnalFavorites(res.data.favorites);
                setFavoritesLoading(false);
            })
            .catch((err) => console.error(err));

        getCategories()
            .then((res) => {
                setCategories(res.data["hydra:member"]);
                setCategoryLoading(false);
            })
            .catch((err) => console.error(err));

        getSources()
            .then((res) => {
                setSources(res.data["hydra:member"]);
                setSourceLoading(false);
            })
            .catch((err) => console.error(err));

    }, [],
    );

    return (
        <>
            <div className="container-fluid">
                <div className="row w-100">
                    <div className="col p-2 titles">
                        <h1>Modifier mes favoris</h1>
                    </div>
                </div>
            </div>
            <div className="row w-100 d-flex justify-content-center">
                <div className="col-md-8">
                    <form style={{ width: "100%" }} onSubmit={handleSubmit(registering)}>
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-6">

                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center">
                            <div className="col-md-8">
                                <h3 className="text-primary">Catégories</h3>
                                <p className="text-muted">Veuillez sélectionner au moins une catégorie.</p>
                                <div className="form-check">
                                    {
                                        (favoritesLoading || categoryLoading || sourceLoading) && (
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
                                        )
                                    }
                                    {
                                        !favoritesLoading && !categoryLoading && !sourceLoading && (
                                            personnalFavorites.map((favoris, index) => (

                                                categories.map((category, index) => {
                                                    if (favoris["@type"] === FAVORITE_CATEGORY) {
                                                        if (favoris.category.name === category.name) {
                                                            return (
                                                                <div className="row">
                                                                    <input className="form-check-input"
                                                                        type="checkbox"
                                                                        id={index}
                                                                        name={category.name}
                                                                        defaultChecked={true} />
                                                                    <label className="form-check-label" for={category.name}>
                                                                        {category.name}
                                                                    </label>
                                                                </div>
                                                            )
                                                        } else {
                                                            return (
                                                                <div className="row">
                                                                    <input className="form-check-input"
                                                                        type="checkbox"
                                                                        id={index}
                                                                        ref={register()}
                                                                        name="favorites[categories]"
                                                                        value={category["@id"]} />
                                                                    <label className="form-check-label" for={category.name}>
                                                                        {category.name}
                                                                    </label>
                                                                </div>
                                                            )
                                                        }
                                                    }
                                                    return null;
                                                })


                                            ))
                                        )
                                    }

                                </div>
                                <h3 className="text-primary mt-4">Sources</h3>
                                <p className="text-muted">Veuillez sélectionner au moins une source.</p>
                                <div className="form-check">
                                    {
                                        (favoritesLoading || categoryLoading || sourceLoading) && (
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
                                        )
                                    }
                                    {
                                        !favoritesLoading && !categoryLoading && !sourceLoading && (
                                            personnalFavorites.map((favoris, index) => (
                                                sources.map((source, index) => {
                                                    if (favoris["@type"] === FAVORITE_SOURCE && favoris.source.name === source.name) {
                                                        return (
                                                            <div className="row">
                                                                <input className="form-check-input"
                                                                    type="checkbox"
                                                                    id={index}
                                                                    name={source.name}
                                                                    defaultChecked />
                                                                <label className="form-check-label" for={index}>
                                                                    {source.name}
                                                                </label>
                                                            </div>
                                                        )
                                                    } else if (favoris["@type"] === FAVORITE_SOURCE && favoris.source.name !== source.name) {
                                                        return (
                                                            <div className="row">
                                                                <input className="form-check-input"
                                                                    type="checkbox"
                                                                    id={index}
                                                                    name={source.name} />
                                                                <label className="form-check-label" for={index}>
                                                                    {source.name}
                                                                </label>
                                                            </div>
                                                        )

                                                    }
                                                    return null;



                                                })
                                            ))
                                        )

                                    }
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div>
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
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};

export default EditFavorites;