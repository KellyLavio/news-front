// React
import React from "react";

import Articles from "./components/Articles/Articles";

const MainContainer = () => {
    return (
      <div className="container">
        <>
        <div className="row">
          <div className="col p-2 titles">
            <h1>News Feed</h1>
          </div>
        </div>
        <Articles />
        </>
      </div>
    );
  }

export default MainContainer;

