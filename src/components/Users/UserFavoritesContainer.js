// React
import React, { useState } from "react";

import { useEffect } from "react";
import { getCategories } from "../../services/categoryService";
import Category from "./UserCategory";

const UserFavoritesContainer = () => {
    const [categories, setCategories] = useState([]);
    

    useEffect(() => {
        getCategories()
            .then((res) => {
                setCategories(res.data["hydra:member"]);
            })
            .catch((err) => console.error(err))
    }, []
    );



    return (

        <div className="col-md-6 border border-top-0 border-bottom-0 pr-5 pl-5">
            {categories.map((category, index) => (
                <Category item={category} key={index} />
            ))
            }
        </div>
    )
}

export default UserFavoritesContainer;