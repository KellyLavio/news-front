// React
import React, { useState } from "react";

// dependencies
import ArticleItem from "./ArticleItem";
import { useEffect } from "react";
import { getArticles } from "../../services/articleService";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import ArticlePreview from "./ArticlePreview";


const Articles = () => {
    const [articles, setArticles] = useState([]);
    const { isLogged } = useContext(UserContext);

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
                isLogged ? (
                    <ArticlePreview key={index}
                    id={article.id}
                    title={article.title}
                    url={article.url}
                    description={article.description}
                    date={article.date}
                    source={article.source.name}
                    category={article.category.name}
                /> 
                ):(
                    <ArticleItem key={index}
                    id={article.id}
                    title={article.title}
                    url={article.url}
                    description={article.description}
                    date={article.date}
                    source={article.source.name}
                    category={article.category.name}
                    comments={article.comments}
                />
                )
            ))}
        </div>
    )
}

export default Articles;