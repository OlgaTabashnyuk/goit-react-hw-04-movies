import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MovieList from '../components/MovieList';

const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?';

const API_KEY = 'b48946e6ff9e999360a939491d6174d8';

class MoviesPage extends Component {
  state = {
    desiredMovie: '',
    movies: [],
  };
  handleChange = event => {
    this.setState({ desiredMovie: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const searchedMovie = this.state.desiredMovie;

    axios
      .get(
        `${SEARCH_URL}api_key=${API_KEY}&language=en-US&query=${searchedMovie}&page=20`,
      )
      .then(response => this.setState({ movies: response.data.results }));
  };

  render() {
    // console.log(this.props.match.url);
    const { query, movies } = this.state;
    return (
      <div>
        <form className="MoviesPageForm" onSubmit={this.handleSubmit}>
          <input
            className="MoviesPageForm-input"
            type="text"
            value={query}
            onChange={this.handleChange}
            placeholder="Search "
          />

          <button className="MovieSearchButton" type="submit">
            Search
          </button>
        </form>

        <MovieList movies={movies} />
      </div>
    );
  }
}

export default MoviesPage;
