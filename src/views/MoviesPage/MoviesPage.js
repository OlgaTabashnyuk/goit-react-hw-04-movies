import { Component } from 'react';
import axios from 'axios';
import QueryString from 'query-string';
import MovieList from '../../components/MovieList';
import s from './MoviesPage.module.css';

const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?';

const API_KEY = 'b48946e6ff9e999360a939491d6174d8';

class MoviesPage extends Component {
  qs = QueryString.parse(this.props.location.search);
  state = {
    query: this.qs.query || '',
    movies: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.movies !== prevState.movies) {
      localStorage.setItem('movies', JSON.stringify(this.state.movies));
    }
  }

  componentDidMount() {
    // if (this.state.query) {
    //   this.axios();
    // }
    const savedMovies = localStorage.getItem('movies');
    const parsedMovies = JSON.parse(savedMovies);
    if (parsedMovies) {
      this.setState({ movies: parsedMovies });
    }
  }

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const searchedMovie = this.state.query;

    axios
      .get(
        `${SEARCH_URL}api_key=${API_KEY}&language=en-US&query=${searchedMovie}&page=20`,
      )
      .then(response => this.setState({ movies: response.data.results }));
    if (this.state.query) {
      this.props.history.push({
        search: `query=${this.state.query}`,
      });
    }
  };

  render() {
    const { query, movies } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className={s.Input}
            type="text"
            value={query}
            onChange={this.handleChange}
            placeholder="Search "
          />
        </form>

        <MovieList
          movies={movies}
          pathname={this.props.location.pathname}
          query={query}
        />
      </div>
    );
  }
}

export default MoviesPage;
