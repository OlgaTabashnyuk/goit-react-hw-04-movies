import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import axios from 'axios';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Review/Reviews';
import routes from '../../routes';
import s from './MovieDetailsPage.module.css';
import noImg from '../../no-img.jpg';
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
    // console.log(response);
    this.setState({
      ...response.data,
      movie: response.data,
    });
  }
  handleGoBack = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.home);
    // history.push(location?.state?.from || routes.movies); // operational chaining
  };
  render() {
    const { match, location } = this.props;

    const { title, genres, release_date, vote_average, overview } = this.state;

    return (
      <div className={s.MovieDetails}>
        <button className={s.Button} type="button" onClick={this.handleGoBack}>
          {/* <span role="img" aria-label="arrow-left-emoji">
            👈
          </span> */}
          Back
        </button>

        <div className={s.MovieCard}>
          <img
            className={s.MoviePoster}
            src={
              this.state.movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${this.state.movie.poster_path}`
                : noImg
            }
            alt={title}
          />
          <div className={s.MovieDescr}>
            <h1>{title}</h1>
            <h2>Genres:</h2>
            <ul>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>

            <p>User score: {vote_average}</p>

            <h2>Overview</h2>
            <p>{overview}</p>
            <p>Release date: {release_date}</p>
          </div>
        </div>

        <ul>
          <h3>Additional information</h3>
          <li>
            <NavLink
              to={{
                pathname: `${match.url}/cast`,
                state: {
                  from: location.state.from,
                },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${match.url}/reviews`,
                state: {
                  from: location.state.from,
                },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path={`${match.path}/cast`} component={Cast} />
          <Route path={`${match.path}/reviews`} component={Reviews} />
        </Switch>
      </div>
    );
  }
}
export default MovieDetailsPage;
