import React, { Component, Fragment } from "react";
import Axios from "axios";
import queryString from "query-string";
import MovieCard from "./MovieCard";

class MovieList extends Component {
  state = { movies: [] };
  componentDidMount() {
    this.fetchMovies();
  }
  componentDidUpdate(prevProps) {
    if (this.props.locaiton !== this.props);
    this.fetchMovies();
  }
  fetchMovies = () => {
    let q = queryString.parse(this.props.location.search);
    Axios.get(`https://www.omdbapi.com/?apikey=9c1141fc&s=${q.searchText}`)
      .then((res) => res.data)
      .then((data) => data.Search)
      .then((movies) => (movies ? this.setState({ movies }) : null));
  };
  render() {
    const movieList =
      this.state.movies !== 0
        ? this.state.movies.map((m, index) => (
            <MovieCard movie={m} key={index} />
          ))
        : null;
    return (
      <div className="row">
        {movieList.length > 0 ? (
          <Fragment>{movieList}</Fragment>
        ) : (
          <Fragment>
            <em>Your search yielded no results</em>
          </Fragment>
        )}
      </div>
    );
  }
}

export default MovieList;
