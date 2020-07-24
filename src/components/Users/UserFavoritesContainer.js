// React
import React, { useState, useEffect } from "react";

import { getFavoriteCategories, getFavoriteSources } from "../../services/favoriteService";
import UserCategories from "./UserCategories";
import UserSources from "./UserSources";

const UserFavoritesContainer = () => {
    const [favoriteCategories, setFavoriteCategories] = useState([]);
    const [favoriteSources, setFavoriteSources] = useState([]);

    useEffect(() => {
        getFavoriteCategories()
            .then((res) => {
                setFavoriteCategories(res.data["hydra:member"]);
            })
            .catch((err) => console.error(err));
        getFavoriteSources()
            .then((res) => {
                setFavoriteSources(res.data["hydra:member"]);
            })
            .catch((err) => console.log(err))
    }, []
    );



    return (

        <div className="col-md-6 border border-top-0 border-bottom-0 pr-5 pl-5 mr-4 ml-4">
            <div className="row d-flex justify-content-center">
                <h2 className="text-danger">Vos Actualités</h2>
                {
                    favoriteCategories.map((favoriteCategory, index) => (
                    <UserCategories item={favoriteCategory} key={index} />
                ))
                }
                {
                    favoriteSources.map((favoriteSource, index) => (
                        <UserSources item={favoriteSource} key={index} />
                    ))
                }


            </div>
        </div>
    )
}

export default UserFavoritesContainer;