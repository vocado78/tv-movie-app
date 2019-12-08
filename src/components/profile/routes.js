import Connections from './tabs/Connections';
import Discussions from './tabs/Discussions';
import Profile from './tabs/Profile';
import Reviews from './tabs/Reviews';
import Watched from './tabs/Watched';
import Watchlist from './tabs/Watchlist';

const path = '/profile';

// should prob create separate components as profile, watched/reviews/watchlist
// and others will look pretty different? so add component prop below in routes

const routes = [
  { path: `${path}`, exact: true, component: Profile },
  { path: `${path}/watched`, exact: false, component: Watched },
  { path: `${path}/watchlist`, exact: false, component: Watchlist },
  { path: `${path}/reviews`, exact: false, component: Reviews },
  { path: `${path}/discussions`, exact: false, component: Discussions },
  { path: `${path}/connections`, exact: false, component: Connections }
];

export default routes;
