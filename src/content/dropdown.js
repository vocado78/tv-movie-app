const genreItems = [
  { id: 'action', label: 'Action' },
  { id: 'adventure', label: 'Adventure' },
  { id: 'animation', label: 'Animation' },
  { id: 'comedy', label: 'Comedy' },
  { id: 'crime', label: 'Crime' },
  { id: 'documentary', label: 'Documentary' },
  { id: 'drama', label: 'Drama' },
  { id: 'family', label: 'Family' },
  { id: 'fantasy', label: 'Fantasy' },
  { id: 'history', label: 'History' },
  { id: 'horror', label: 'Horror' },
  { id: 'music', label: 'Music' },
  { id: 'mystery', label: 'Mystery' },
  { id: 'romance', label: 'Romance' },
  { id: 'sci-fi', label: 'Science Fiction' },
  { id: 'thriller', label: 'Thriller' },
  { id: 'war', label: 'War' },
  { id: 'western', label: 'Western' }
];

const decadeItems = [
  { id: 'all-times', label: 'All' },
  { id: '2020s', label: '2020s' },
  { id: '2010s', label: '2010s' },
  { id: '2000s', label: '2000s' },
  { id: '1990s', label: '1990s' },
  { id: '1980s', label: '1980s' },
  { id: '1970s', label: '1970s' },
  { id: '1960s', label: '1960s' },
  { id: '1950s', label: '1950s' },
  { id: '1940s', label: '1940s' },
  { id: '1930s', label: '1930s' },
  { id: '1920s', label: '1920s' },
  { id: '1910s', label: '1910s' },
  { id: '1900s', label: '1900s' }
];

export const dropdownItems = [
  { id: 'genre', label: 'Genre', items: genreItems },
  { id: 'decade', label: 'Decade', items: decadeItems },
];

export const BROWSE_BAR_LABEL = 'Browse by';
