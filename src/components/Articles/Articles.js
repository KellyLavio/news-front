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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getArticles()
            .then((res) => {
                setArticles(res.data["hydra:member"]);
                setLoading(false);
            })
            .catch((err) => console.error(err))
    }, []);

    return (
        <div>
            {loading && (
                <>
                <div className="d-flex justify-content-center">
                    <div>
                        <div className="spinner-grow text-primary inline-block" role="status">
                            <span className="sr-only"></span>
                        </div>
                    </div>
                    <div className="text-primary inline-block">
                        Chargement du fil d'actualités en cours...
                    </div>
                </div>
                    
                </>
            )}
            {!loading && (
                articles.map((article, index) => (
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
                    ) : (
                            <ArticleItem key={index}
                                id={article.id}
                                title={article.title}
                                url={article.url}
                                description={article.description}
                                date={article.date}
                                source={article.source.name}
                                category={article.category.name}
                            />
                        )
                ))
            )
            }
        </div>
    )
}

export default Articles;