import { Suspense, lazy } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import AppBar from './components/AppBar';

import routes from './routes';
import 'modern-normalize/modern-normalize.css';
// import s from './styles/styles.module.css';

const Homepage = lazy(() =>
  import('./views/Homepage.js' /*webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage.js' /*webpackChunkName: "movie-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage.js' /*webpackChunkName: "movieDetail-page" */
  ),
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView.js' /*webpackChunkName: "NotFoundView-page" */),
);

const App = () => (
  <>
    <AppBar />

    <Suspense fallback={<h1>Загружаем...</h1>}>
      <Switch>
        <Route exact path={routes.home} component={Homepage} />
        <Route exact path={routes.movies} component={MoviesPage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route component={NotFoundView} />
      </Switch>
    </Suspense>
  </>
);

export default App;
