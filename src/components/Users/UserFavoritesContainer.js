// React
import React, { useState } from "react";

import ArticleItem from "../Articles/ArticlesItem";
import { useEffect } from "react";
import { getCategories } from "../../services/categoryService";

const UserFavoritesContainer = () => {
    const [categories, setCategories] = useState([]);
    const [Articles, setArticles] = useState([]);

    useEffect(() => {
        getCategories()
            .then((res) => {
                setCategories(res.data["hydra:member"]);
            })
            .catch((err) => console.error(err))
    }, []);

    return (
        
        <div className="col">
            
        </div>
    )
}

export default UserFavoritesContainer;