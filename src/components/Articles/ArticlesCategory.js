// React
import React from "react";

// dependencies
import ArticlePreview from "./ArticlePreview";

const ArticlesCategory = ({items}) => {

    return (
        <div>
            {items.map((article, index) => (
                <ArticlePreview key={index}
                    id={article.id}
                    title={article.title}
                    url={article.url}
                    description={article.description}
                    date={article.date}
                    source={article.source.name}
                />
            ))}
        </div>
    )
}

export default ArticlesCategory;