const path = '/profile';

const profileNavItems = [
  { id: 'profile', label: 'My Profile', to: `${path}` },
  { id: 'watched', label: 'Watched', to: `${path}/watched` },
  { id: 'watchlist', label: 'Watchlist', to: `${path}/watchlist` },
  { id: 'reviews', label: 'Reviews', to: `${path}/reviews` },
  { id: 'discussions', label: 'Discussions', to: `${path}/discussions` },
  { id: 'connections', label: 'Connections', to: `${path}/connections` }
];

export default profileNavItems;
