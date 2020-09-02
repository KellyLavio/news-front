import React from 'react';
import "../../App.css";

var moment = require('moment');
require("moment/locale/fr");
moment.locale("fr");


const ArticleItem = ({
    id,
    title,
    url,
    description,
    date,
    source,
    category,
    comments
}) => {
    return (
        <div className="row d-flex justify-content-center mb-4" key={id}
        >
            <div className="card w-100">
                <div className="card-header text-center">
                    <h5 className="card-title titles">{title}</h5>
                </div>
                <div className="card-body">
                    <a href={url}>
                        <img
                            className="card-img-top"
                            src="https://source.unsplash.com/1600x900/"
                            alt="Card cap"
                        />
                    </a>
                    <p className="card-text">{description}</p>
                    <a href={url} className="btn btn-primary">
                        Voir l'article
                    </a>
                </div>
                <div className="card-footer">
                    <small className="text-muted">
                        {moment(date).format("LLLL")}
                    </small>
                    <div>
                        <span className="badge badge-pill badge-info">
                            {source}
                        </span>
                        <span className="badge badge-pill badge-primary">
                            {category}
                        </span>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default ArticleItem;