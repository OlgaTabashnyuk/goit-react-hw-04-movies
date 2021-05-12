import 'modern-normalize/modern-normalize.css';

import { Route, NavLink, Switch } from 'react-router-dom';
import Homepage from './views/Homepage';

import MovieDetailsPage from './views/MovieDetailsPage';
import MoviesPage from './views/MoviesPage';
import NotFoundView from './views/NotFoundView';
import routes from './routes';
// import s from './styles/styles.module.css';

const App = () => (
  <>
    <ul>
      <li>
        <NavLink exact to={routes.home}>
          {' '}
          Home{' '}
        </NavLink>
      </li>
      <li>
        <NavLink to={routes.movies}> Movies </NavLink>
      </li>
    </ul>
    <Switch>
      <Route exact path={routes.home} component={Homepage} />
      <Route exact path={routes.movies} component={MoviesPage} />
      <Route path={routes.movieDetails} component={MovieDetailsPage} />
      <Route component={NotFoundView} />
    </Switch>
  </>
);

export default App;
