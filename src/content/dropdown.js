const genreItems = [
  { type: 'genre', label: 'Action' },
  { type: 'genre', label: 'Adventure' },
  { type: 'genre', label: 'Animation' },
  { type: 'genre', label: 'Comedy' },
  { type: 'genre', label: 'Crime' },
  { type: 'genre', label: 'Documentary' },
  { type: 'genre', label: 'Drama' },
  { type: 'genre', label: 'Family' },
  { type: 'genre', label: 'Fantasy' },
  { type: 'genre', label: 'History' },
  { type: 'genre', label: 'Horror' },
  { type: 'genre', label: 'Music' },
  { type: 'genre', label: 'Mystery' },
  { type: 'genre', label: 'Romance' },
  { type: 'genre', label: 'Science Fiction' },
  { type: 'genre', label: 'Thriller' },
  { type: 'genre', label: 'War' },
  { type: 'genre', label: 'Western' }
];

const decadeItems = [
  { type: 'decade', label: 'All' },
  { type: 'decade', label: '2020s' },
  { type: 'decade', label: '2010s' },
  { type: 'decade', label: '2000s' },
  { type: 'decade', label: '1990s' },
  { type: 'decade', label: '1980s' },
  { type: 'decade', label: '1970s' },
  { type: 'decade', label: '1960s' },
  { type: 'decade', label: '1950s' },
  { type: 'decade', label: '1940s' },
  { type: 'decade', label: '1930s' },
  { type: 'decade', label: '1920s' },
  { type: 'decade', label: '1910s' },
  { type: 'decade', label: '1900s' }
];

export const dropdownItems = [
  { type: 'genre', label: 'Genre', items: genreItems },
  { type: 'decade', label: 'Decade', items: decadeItems },
];

export const BROWSE_BAR_LABEL = 'Browse by';
