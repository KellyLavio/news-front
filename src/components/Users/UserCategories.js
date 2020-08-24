import React from "react";
import ArticlesCategory from "../Articles/ArticlesCategory";

const UserCategories = ({item}) => {

    return(
    <div>
        <h3 className="text-info">{item.category.name.toUpperCase()}</h3>
        <ArticlesCategory items={item.category.articles} />
    </div>
    )
};

export default UserCategories;