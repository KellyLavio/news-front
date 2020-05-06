import React, { Component } from "react";
import "./App.scss";
import Nav from "./Nav";
import Axios from "axios";

var moment = require('moment');
require("moment/locale/fr");
moment.locale("fr");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

    componentDidMount = () => {
      Axios.get("https://127.0.0.1:8000/api/articles").then((res) =>
      this.setState({
        articles: res.data,
      })
    );
  };

  render = () => {
    return (
      <>
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col p-2">
              <h1>News Feed</h1>
            </div>
          </div>
          <div className="row">
            {this.state.articles.map((article) => (
              <div className="col-12 col-lg-4" key={article.id}>
                <div className="card" style={{ width: "18rem" }}>
                  <h5 className="card-title">{article.title}</h5>
                  <img
                    className="card-img-top"
                    src="https://fakeimg.pl/250x100/"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <p className="card-text">{article.description}</p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                    <div className="card-footer">
                      <small className="text-muted">
                        {moment(article.date).format("LLLL")}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };
}



export default App;

