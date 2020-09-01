import React, { Component } from "react";
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
    const movieList = this.state.movies
      ? this.state.movies.map((m, index) => <MovieCard movie={m} key={index} />)
      : "no movies returned in that search";
    return <div className="row">{movieList}</div>;
  }
}

export default MovieList;
