// React
import React from "react";

import UserFavoritesContainer from "./UserFavoritesContainer";
import Articles from "../Articles/Articles";

const UserMainContainer = () => {


    return (
        <div className="container-fluid" style={{ position: "relative" }}>
            <>
                <div className="row w-100">
                    <div className="col p-2 titles">
                        <h1>News Feed</h1>
                    </div>
                </div>
                <div className="row w-100">
                    <div className="col">
                        <div className="row d-flex justify-content-center">
                            <h4>Notifications</h4>
                        </div>

                    </div>
                    <UserFavoritesContainer />
                    <div className="col">
                        <Articles />
                    </div>
                    

                </div>
            </>
        </div>
    );
}

export default UserMainContainer;