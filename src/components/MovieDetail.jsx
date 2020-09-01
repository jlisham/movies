import React, { Component } from "react";
import Axios from "axios";
import queryString from "query-string";

class MovieDetail extends Component {
  state = { movie: {} };

  componentDidMount() {
    this.fetchMovies();
  }
  componentDidUpdate(prevProps) {
    if (this.props.locaiton !== this.props);
    this.fetchMovies();
  }
  fetchMovies = () => {
    let q = queryString.parse(this.props.location.search);
    Axios.get(`https://www.omdbapi.com/?apikey=9c1141fc&i=${q.imdbID}`)
      .then((res) => res.data)
      .then((movie) => this.setState({ movie }));
  };

  render() {
    let { movie } = this.state;

    let output =
      movie && Object.keys(movie).length > 0 ? (
        <div className="row">
          <div className="col-md-4">
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="img img-thumbnail"
            />
          </div>
          <div className="col-md-8">
            <h1>{movie.Title}</h1>
            <table className="table">
              <tbody>
                <tr>
                  <td>Director</td>
                  <td>{movie.director}</td>
                </tr>
                <tr>
                  <td>Year</td>
                  <td>{movie.Year}</td>
                </tr>
                <tr>
                  <td>Language</td>
                  <td>{movie.Language}</td>
                </tr>
                <tr>
                  <td>Writer</td>
                  <td>{movie.Writer}</td>
                </tr>
                <tr>
                  <td>Awards</td>
                  <td>{movie.Awards}</td>
                </tr>
                <tr>
                  <td>Genre</td>
                  <td>{movie.Genre}</td>
                </tr>
                <tr>
                  <td>Actors</td>
                  <td>{movie.Actors}</td>
                </tr>
                <tr>
                  <td>Box Office</td>
                  <td>{movie.BoxOffice}</td>
                </tr>
                <tr>
                  <td>Released</td>
                  <td>{movie.Released}</td>
                </tr>
              </tbody>
            </table>
            <button
              className="btn-primary"
              onClick={() => this.props.history.go(-1)}
            >
              Back
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <img src="/images/loading.gif" alt="loading..." />
        </div>
      );
    return output;
  }
}

export default MovieDetail;
