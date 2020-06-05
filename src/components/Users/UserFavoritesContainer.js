// React
import React, { useState } from "react";

import { useEffect } from "react";
import { getCategories } from "../../services/categoryService";
import ArticlePreview from "../Articles/ArticlePreview";

const UserFavoritesContainer = () => {
    const [categories, setCategories] = useState([]);
    const [favoriteArticles, setFavoriteArticles] = useState([]);

    useEffect(() => {
        getCategories()
            .then((res) => {
                setCategories(res.data["hydra:member"]);
            })
            .catch((err) => console.error(err))
    },
    );



    return (

        <div className="col">
            {favoriteArticles.map((article, index) =>
                <ArticlePreview key={index}
                    id={article.id}
                    title={article.title}
                    url={article.url}
                    description={article.description}
                    date={article.date}
                    source={article.source}
                />
            )
            }
        </div>
    )
}

export default UserFavoritesContainer;