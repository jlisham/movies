import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import MovieList from "./MovieList";
import MovieDetail from "./MovieDetail";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="container">
            <Route path="/" exact={true} component={Home} />{" "}
            <Route path="/movies" component={MovieList} />{" "}
            <Route path="/details" component={MovieDetail} />{" "}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
