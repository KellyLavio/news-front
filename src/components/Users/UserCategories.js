import React from "react";

const UserCategories = ({ item }) => {
    

    return (
        <div>
            <h3 className="text-primary text-center mt-4">Catégories favorites</h3>
            <h4 className="text-info">{item.category.name.toUpperCase()}</h4>
            {item.category.sources.map((favoriteCategorySources, index) => (
                console.log(favoriteCategorySources.articles)
            ))
            }
            
             
        </div>
    )
};

export default UserCategories;