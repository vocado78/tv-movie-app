const genreItems = [
  { type: 'genre', label: 'action' },
  { type: 'genre', label: 'adventure' },
  { type: 'genre', label: 'animation' },
  { type: 'genre', label: 'comedy' },
  { type: 'genre', label: 'crime' },
  { type: 'genre', label: 'documentary' },
  { type: 'genre', label: 'drama' },
  { type: 'genre', label: 'family' },
  { type: 'genre', label: 'fantasy' },
  { type: 'genre', label: 'history' },
  { type: 'genre', label: 'horror' },
  { type: 'genre', label: 'music' },
  { type: 'genre', label: 'mystery' },
  { type: 'genre', label: 'romance' },
  { type: 'genre', label: 'science fiction' },
  { type: 'genre', label: 'thriller' },
  { type: 'genre', label: 'war' },
  { type: 'genre', label: 'western' }
];

const decadeItems = [
  { type: 'decade', label: 'all' },
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
  { type: 'genre', label: 'genre', items: genreItems },
  { type: 'decade', label: 'decade', items: decadeItems },
];

export const BROWSE_BAR_LABEL = 'browse by';
