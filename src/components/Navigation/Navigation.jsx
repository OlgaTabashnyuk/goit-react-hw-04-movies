import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.Navigation}>
      <NavLink exact to={routes.home} className={s.NavLink}>
        Home
      </NavLink>

      <NavLink to={routes.movies} className={s.NavLink}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
