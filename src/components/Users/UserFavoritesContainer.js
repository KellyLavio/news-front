// React
import React, { useState, useEffect } from "react";

import { getFavoriteCategories } from "../../services/categoryService";
import UserCategories from "./UserCategories";

const UserFavoritesContainer = () => {
    const [favoriteCategories, setFavoriteCategories] = useState([]);

    useEffect(() => {
        getFavoriteCategories()
            .then((res) => {
                setFavoriteCategories(res.data["hydra:member"]);
            })
            .catch((err) => console.error(err))
    }, []
    );



    return (

        <div className="col-md-6 border border-top-0 border-bottom-0 pr-5 pl-5 mr-4 ml-4">
            <div className="row d-flex justify-content-center">
                <h2 className="text-danger">Vos Actualités</h2>
                {favoriteCategories.map((category, index) => (
                    <UserCategories item={category} key={index} />
                ))
                }
            </div>
        </div>
    )
}

export default UserFavoritesContainer;