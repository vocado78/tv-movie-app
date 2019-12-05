const path = '/profile';

// should prob create separate components as profile, watched/reviews/watchlist
// and others will look pretty different? so add component prop below in routes

const routes = [
  { path: `${path}`, exact: true, component: '' },
  { path: `${path}/watched`, exact: false, component: '' },
  { path: `${path}/watchlist`, exact: false, component: '' },
  { path: `${path}/reviews`, exact: false, component: '' },
  { path: `${path}/lists`, exact: false, component: '' },
  { path: `${path}/discussions`, exact: false, component: '' },
  { path: `${path}/likes`, exact: false, component: '' },
  { path: `${path}/connections`, exact: false, component: '' },
];

export default routes;
