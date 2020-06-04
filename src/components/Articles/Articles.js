// React
import React, { Component } from "react";

// dependencies
import Axios from "axios";
import ArticleItem from "./ArticlesItem";


class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
        };
    }

    componentDidMount = () => {
        Axios.get("https://127.0.0.1:8000/api/articles").then((res) =>
            this.setState({
                articles: res.data["hydra:member"],
            })
        );
    };

    render = () => {
        return (
            <div className="col-6">
                {this.state.articles.map((article) => (
                    <ArticleItem
                        id={article.id}
                        title={article.title}
                        url={article.url}
                        description={article.description}
                        date={article.date}
                        category={article.category.name}
                    />
                ))}
            </div>
        );
    };
}

export default Articles;