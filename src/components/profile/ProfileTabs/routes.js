import {
  Connections,
  Discussions,
  Profile,
  Reviews,
  Watched,
  Watchlist
} from './tabs';
import ROUTES from '../../../constants/routes';

const routes = [
  { path: `${ROUTES.PROFILE}`, exact: true, component: Profile },
  { path: `${ROUTES.WATCHED}`, exact: false, component: Watched },
  { path: `${ROUTES.WATCHLIST}`, exact: false, component: Watchlist },
  { path: `${ROUTES.REVIEWS}`, exact: false, component: Reviews },
  { path: `${ROUTES.PROFILE_DISCUSSIONS}`, exact: false, component: Discussions },
  { path: `${ROUTES.CONNECTIONS}`, exact: false, component: Connections }
];

export default routes;
