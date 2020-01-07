const genreItems = [
  { type: 'genre', label: 'action', id: 'action' },
  { type: 'genre', label: 'adventure', id: 'adventure' },
  { type: 'genre', label: 'animation', id: 'animation' },
  { type: 'genre', label: 'comedy', id: 'comedy' },
  { type: 'genre', label: 'crime', id: 'crime' },
  { type: 'genre', label: 'documentary', id: 'documentary' },
  { type: 'genre', label: 'drama', id: 'drama' },
  { type: 'genre', label: 'family', id: 'family' },
  { type: 'genre', label: 'fantasy', id: 'fantasy' },
  { type: 'genre', label: 'history', id: 'history' },
  { type: 'genre', label: 'horror', id: 'horror' },
  { type: 'genre', label: 'music', id: 'music' },
  { type: 'genre', label: 'mystery', id: 'mystery' },
  { type: 'genre', label: 'romance', id: 'romance' },
  { type: 'genre', label: 'science fiction', id: 'sci-fi' },
  { type: 'genre', label: 'thriller', id: 'thriller' },
  { type: 'genre', label: 'war', id: 'war' },
  { type: 'genre', label: 'western', id: 'western' }
];

const decadeItems = [
  { type: 'decade', label: 'all', id: 'all' },
  { type: 'decade', label: '2020s', id: '2020s' },
  { type: 'decade', label: '2010s', id: '2010s' },
  { type: 'decade', label: '2000s', id: '2000s' },
  { type: 'decade', label: '1990s', id: '1990s' },
  { type: 'decade', label: '1980s', id: '1980s' },
  { type: 'decade', label: '1970s', id: '1970s' },
  { type: 'decade', label: '1960s', id: '1960s' },
  { type: 'decade', label: '1950s', id: '1950s' },
  { type: 'decade', label: '1940s', id: '1940s' },
  { type: 'decade', label: '1930s', id: '1930s' },
  { type: 'decade', label: '1920s', id: '1920s' },
  { type: 'decade', label: '1910s', id: '1910s' },
  { type: 'decade', label: '1900s', id: '1900s' }
];

export const dropdownItems = [
  { type: 'genre', label: 'genre', items: genreItems },
  { type: 'decade', label: 'decade', items: decadeItems },
];

export const BROWSE_BAR_LABEL = 'browse by';

export const SORT_BY_LABEL = 'sort by';

export const sortItems = [
  { type: 'sort', label: 'a-z', id: 'a-z' },
  { type: 'sort', label: 'rating', id: 'rating' },
  { type: 'sort', label: 'popular', id: 'popular' },
  { type: 'sort', label: 'release date', id: 'release' }
];
