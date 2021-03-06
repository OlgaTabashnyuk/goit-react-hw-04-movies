import React, { Component } from 'react';
import axios from 'axios';
import MovieList from '../../components/MovieList/MovieList';

const BASE_URL = 'https://api.themoviedb.org/3/trending/';

const API_KEY = 'b48946e6ff9e999360a939491d6174d8';

class HomePage extends Component {
  state = {
    movies: [],
  };
  async componentDidMount() {
    const { data } = await axios.get(`${BASE_URL}movie/day?api_key=${API_KEY}`);

    this.setState({ movies: data.results });
    localStorage.clear();
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <h1>Trending today</h1>

        <MovieList
          movies={movies}
          // pathname={this.props.location.pathname}
        />
      </>
    );
  }
}

export default HomePage;
