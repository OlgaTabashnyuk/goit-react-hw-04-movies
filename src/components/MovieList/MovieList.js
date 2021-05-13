import { Link, withRouter } from 'react-router-dom';
import s from './MovieList.module.css';
import noImg from '../../no-img.jpg';
const MovieList = ({ movies, location }) => {
  return (
    <ul className={s.PreviewList}>
      {movies.map(movie => (
        <li className={s.PreviewItem} key={movie.id}>
          <Link
            className={s.PreviewLink}
            to={{
              pathname: `/movies/${movie.id}`,
              state: {
                from: location,
              },
            }}
          >
            <img
              className={s.PreviewImg}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : noImg
              }
              alt={movie.title}
            />
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MovieList);
