import React from 'react';
import "../../App.css";

var moment = require('moment');
require("moment/locale/fr");
moment.locale("fr");

const ArticlePreview = ({
    id,
    title,
    url,
    date,
    description,
    source,
    category
}) => {
    return (
        <div className="row d-flex justify-content-center mb-2" key={id}>
            <div className="card border-dark mb-3 w-100">
                <div className="card-header">{title}</div>
                <div className="card-body text-dark">
                    <p className="card-text">{description}</p>
                    <a href={url} className="btn btn-primary">Voir l'article</a>
                </div>
                <div className="card-footer">
                    <small className="text-muted">
                        {moment(date).format("LLLL")}
                    </small>
                    <div>
                        <span className="badge badge-pill badge-info">
                            {source}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArticlePreview;