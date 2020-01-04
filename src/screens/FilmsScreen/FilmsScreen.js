import React from 'react';
import { Route } from 'react-router-dom';

import Container from '../../components/Container/Container';
import BrowseBar from '../../components/BrowseBar/BrowseBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchResults from '../../components/SearchResults/SearchResults';
import ROUTES from '../../constants/routes';

// film screen will make api browse/search requests, based on url params, and keep film/tv list state
// which is passed to result list component

// pass function from filmscreen to searchbar for searchbar value (state)

const FilmsScreen = () => {
  return (
    <Container className="flex-col py-8 h-stick">
      <section className="flex justify-between">
        <BrowseBar />
        <SearchBar onSubmit={() => { }} />
      </section>
      <Route exact path={ROUTES.FILMS_GENRE}>
        <SearchResults />
      </Route>
      <Route path={ROUTES.FILMS_DECADE}>
        <SearchResults />
      </Route>
      <Route path={ROUTES.FILMS_GENRE_DECADE}>
        <SearchResults />
      </Route>
    </Container>
  );
};

export default FilmsScreen;
