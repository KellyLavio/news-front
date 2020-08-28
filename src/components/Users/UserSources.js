import React from 'react';
import ArticlesSource from "../Articles/ArticleSource";

const UserSources = ({ item }) => {
    return (
        <div>
            <h3 className="text-primary text-center mt-4">Sources favorites</h3>
            <h4 className="text-info">{item.source.name.toUpperCase()}</h4>
            <ArticlesSource items={item.source.articles} />
        </div>
    )
}

export default UserSources;