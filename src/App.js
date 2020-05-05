import React from 'react';
import './App.scss';
import Nav from "./Nav";
import Axios from "axios";


const App = () => {
  let articles = [];

  Axios.get("https://127.0.0.1:8000/api/articles")
    .then(res => (articles = res.data))
    .then(() => console.log(articles));
  return (
    <>
      <Nav />
    </>
  )
}

export default App;
