import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

class Header extends Component {
  submitHandler = (e) => {
    e.preventDefault();
    let { history } = this.props;
    history.push("/movies?searchText=" + this.refs.searchTf.value);
  };
  render() {
    return (
      <div className="alert alert-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>
                <Link to="/" style={{ textDecoration: "none" }}>
                  Movie Browser
                </Link>
              </h3>
            </div>
            <div className="col-md-8">
              <form id="searchMovieDb" onSubmit={this.submitHandler}>
                <label htmlFor="search">
                  {" "}
                  <input
                    id="search"
                    ref="searchTf"
                    type="search"
                    placeholder="search the movie database..."
                    className="form-control"
                  />
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
