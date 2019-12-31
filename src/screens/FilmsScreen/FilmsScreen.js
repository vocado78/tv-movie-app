import React from 'react';

import Container from '../../components/Container/Container';
import BrowseBar from '../../components/BrowseBar/BrowseBar';
import SearchBar from '../../components/SearchBar/SearchBar';

const FilmsScreen = () => {
  return (
    <Container className="flex-col py-8">
      <section className="flex justify-between">
        <BrowseBar />
        <SearchBar onSubmit={() => {}} />
      </section>
    </Container>
  );
};

export default FilmsScreen;
