import {
  Connections,
  Discussions,
  Profile,
  Reviews,
  Watched,
  Watchlist
} from './tabs';

const path = '/profile';

const routes = [
  { path: `${path}`, exact: true, component: Profile },
  { path: `${path}/watched`, exact: false, component: Watched },
  { path: `${path}/watchlist`, exact: false, component: Watchlist },
  { path: `${path}/reviews`, exact: false, component: Reviews },
  { path: `${path}/discussions`, exact: false, component: Discussions },
  { path: `${path}/connections`, exact: false, component: Connections }
];

export default routes;
