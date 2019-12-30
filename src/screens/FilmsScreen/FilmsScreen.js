import React from 'react';

import Container from '../../components/Container/Container';
import BrowseBar from '../../components/BrowseBar/BrowseBar';

const FilmsScreen = () => {
  return (
    <Container className="flex-col py-8">
      <BrowseBar />
    </Container>
  );
};

export default FilmsScreen;
