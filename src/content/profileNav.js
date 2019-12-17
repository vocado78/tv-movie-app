import ROUTES from '../constants/routes';

const profileNavItems = [
  { id: 'profile', label: 'My Profile', to: `${ROUTES.PROFILE}` },
  { id: 'watched', label: 'Watched', to: `${ROUTES.WATCHED}` },
  { id: 'watchlist', label: 'Watchlist', to: `${ROUTES.WATCHLIST}` },
  { id: 'reviews', label: 'Reviews', to: `${ROUTES.REVIEWS}` },
  { id: 'discussions', label: 'Discussions', to: `${ROUTES.PROFILE_DISCUSSIONS}` },
  { id: 'connections', label: 'Connections', to: `${ROUTES.CONNECTIONS}` }
];

export default profileNavItems;
