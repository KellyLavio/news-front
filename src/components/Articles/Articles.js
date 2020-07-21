// React
import React, { useState } from "react";

// dependencies
import ArticleItem from "./ArticleItem";
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
        <div>
            {articles.map((article, index) => (
                <ArticleItem key={index}
                    id={article.id}
                    title={article.title}
                    url={article.url}
                    description={article.description}
                    date={article.date}
                    source={article.source.name}
                    category={article.category.name}
                />
            ))}
        </div>
    )
}

export default Articles;