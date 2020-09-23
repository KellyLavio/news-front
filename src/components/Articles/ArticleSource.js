// React
import React from "react";
import CommentBox from "../ProfilPage/CommentBox";

// dependencies
import ArticleItem from "./ArticleItem";

const ArticlesCategory = ({items}) => {

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
                    comment={article.comment}
                />
                <CommentBox items={article.comments}/>
                </>
            ))}
        </div>
    )
}

export default ArticlesCategory;