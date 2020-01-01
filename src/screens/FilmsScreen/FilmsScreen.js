import React from 'react';

import Container from '../../components/Container/Container';
import BrowseBar from '../../components/BrowseBar/BrowseBar';
import SearchBar from '../../components/SearchBar/SearchBar';

// path prop passed from state here down to dropdown
// all items in dropdown content should be same component, like a form select element
// have browsebar as class component to handle dropdown state?
// film screen will make api browse/search requests, based on url params, and keep film/tv list state
// which is passed to result list component

// pass function from filmscreen to browsebar for dropdown state? (as for search value from searchbar)

const FilmsScreen = () => {
  return (
    <Container className="flex-col py-8 h-stick">
      <section className="flex justify-between">
        <BrowseBar handleSelect={() => {}} />
        <SearchBar onSubmit={() => { }} />
      </section>
    </Container>
  );
};

export default FilmsScreen;
