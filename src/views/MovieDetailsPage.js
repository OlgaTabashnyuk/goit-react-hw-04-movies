import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import axios from 'axios';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

const MOVIEDETAILS_URL = 'https://api.themoviedb.org/3/movie';

const API_KEY = 'b48946e6ff9e999360a939491d6174d8';

class MovieDetailsPage extends Component {
  state = {
    genres: [],
    movie: [],
    title: null,
    // id: null,
    poster_path: null,
    release_date: null,
    vote_average: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const response = await axios.get(
      `${MOVIEDETAILS_URL}/${movieId}?api_key=${API_KEY}&append_to_response=videos`,
    );

    this.setState({
      ...response.data,
      movie: response.data,
    });
  }
  render() {
    const { match } = this.props;

    const { title, genres, release_date, vote_average, overview } = this.state;

    return (
      <div>
        <button type="button">Back</button>

        <h1>{title}</h1>
        <img
          src={`https://image.tmdb.org/t/p/w300${this.state.movie.poster_path}`}
          alt={title}
        />
        <h2>Genres:</h2>
        <ul>
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
        <h3>Release date: {release_date}</h3>
        <h4>User score: {vote_average}</h4>

        <h3>User Overview</h3>
        <p>{overview}</p>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink
              to={`${match.url}/cast`}
              className="NavLink"
              activeClassName="NavLink--active"
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${match.url}/reviews`}
              className="NavLink"
              activeClassName="NavLink--active"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/movies/:movieId/cast" component={Cast} />
          <Route path="/movies/:movieId/reviews" component={Reviews} />
        </Switch>
      </div>
    );
  }
}
export default MovieDetailsPage;
