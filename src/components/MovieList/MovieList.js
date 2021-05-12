import { Link, withRouter } from 'react-router-dom';
import s from './MovieList.module.css';
const MovieList = ({ movies, location }) => {
  return (
    <ul className={s.List}>
      {movies.map(({ id, title }) => (
        <li className={s.Link} key={id}>
          <Link
            to={{
              pathname: `/movies/${id}`,
              state: {
                from: location,
              },
            }}
          >
            {title}
          </Link>

          {/* <Link to={`movies/${id}`}>{title}</Link> */}
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MovieList);
