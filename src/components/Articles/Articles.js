// React
import React, { useState } from "react";

// dependencies
import ArticleItem from "./ArticlesItem";
import { useEffect } from "react";
import { getArticles } from "../../services/articleService";


const Articles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles()
            .then((res) => {
                setArticles(res.data["hydra:member"]);
            })
            .catch((err) => console.error(err))
    }, []);

    return (
        <div className="col-md-6 border border-top-0 border-bottom-0 pr-5 pl-5">
            {articles.map((article, index) => (
                <ArticleItem key={index}
                    id={article.id}
                    title={article.title}
                    url={article.url}
                    description={article.description}
                    date={article.date}
                    category={article.category.name}
                />
            ))}
        </div>
    )
}

export default Articles;