import React from 'react';
import ArticlesSource from "../Articles/ArticleSource";

const UserSources = ({item}) => {
    return (
        <div>
        <h3 className="text-info">{item.source.name.toUpperCase()}</h3>
        <ArticlesSource items={item.source.articles} />
        </div>
    )
}

export default UserSources;