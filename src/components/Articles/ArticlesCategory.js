// React
import React from "react";
// dependencies
import ArticleItem from "./ArticleItem";


const ArticlesCategory = ({ items }) => {
    console.log(items)

    return (
        <div>
            {items.map((article, index) => (
                <>
                <ArticleItem key={index}
                    id={article.id}
                    title={article.title}
                    url={article.url}
                    description={article.description}
                    date={article.date}
                />
                {/* <CommentBox items={article.comments}/> */}
                </>
            ))}
        </div>
    )
}

export default ArticlesCategory;