// React
import React from "react";

import Articles from "../Articles/Articles";

const UserMainContainer = () => {
    return (
        <div className="container">
            <>
                <div className="row">
                    <div className="col p-2 titles">
                        <h1>News Feed</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col"></div>
                    <Articles />
                    <div className="col"></div>
                </div>
            </>
        </div>
    );
}

export default UserMainContainer;