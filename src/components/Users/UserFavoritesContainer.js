// React
import React, { useState, useEffect } from "react";

import { getFavoriteCategories, getFavoriteSources } from "../../services/favoriteService";
import UserCategories from "./UserCategories";
import UserSources from "./UserSources";

const UserFavoritesContainer = () => {
    const [favoriteCategories, setFavoriteCategories] = useState([]);
    const [favoriteSources, setFavoriteSources] = useState([]);
    const [loadingCategories, setLoadingCategories] = useState(true);
    const [loadingSources, setLoadingSources] = useState(true);

    useEffect(() => {
        getFavoriteCategories()
            .then((res) => {
                setFavoriteCategories(res.data["hydra:member"]);
                setLoadingCategories(false);
            })
            .catch((err) => console.error(err));
        getFavoriteSources()
            .then((res) => {
                setFavoriteSources(res.data["hydra:member"]);
                setLoadingSources(false);
            })
            .catch((err) => console.log(err))
    }, []
    );



    return (

        <div className="col-md-6 border border-top-0 border-bottom-0 pr-5 pl-5 mr-4 ml-4">
            <div className="row d-flex justify-content-center">
                <div className="row w-100">
                    <div className="col titles">
                        <h2 className="text-danger">Vos Actualités</h2>
                    </div>
                </div>
                <div className="row">
                    {(loadingCategories || loadingSources) && (
                        <>
                            <div>
                                <div className="spinner-grow text-primary" role="status">
                                    <span className="sr-only"></span>
                                </div>
                            </div>
                            <div className="text-primary">
                                Chargement de votre fil d'actualités en cours...
                            </div>
                        </>
                    )}
                    {!loadingCategories && (
                        favoriteCategories.map((favoriteCategory, index) => (
                            <UserCategories item={favoriteCategory} key={index} />
                        ))
                    )
                    }

                    {!loadingSources && (
                        favoriteSources.map((favoriteSource, index) => (
                            <UserSources item={favoriteSource} key={index} />
                        ))
                    )

                    }

                </div>
            </div>
        </div>
    )
}

export default UserFavoritesContainer;