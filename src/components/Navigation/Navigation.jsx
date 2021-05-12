import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={s.Navigation}>
      <NavLink
        className={s.NavLink}
        activeClassName={s.NavLinkActive}
        exact
        to={routes.home}
      >
        Home
      </NavLink>

      <NavLink
        className={s.NavLink}
        activeClassName={s.NavLinkActive}
        exact
        to={routes.movies}
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
