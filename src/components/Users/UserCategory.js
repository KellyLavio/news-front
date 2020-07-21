import React from "react";
import ArticlesCategory from "../Articles/ArticlesCategory";

const Category = ({item}) => {

    return(
    <div>
        <h3>{item.name}</h3>
        <ArticlesCategory items={item.articles} />
    </div>
    )
};

export default Category;