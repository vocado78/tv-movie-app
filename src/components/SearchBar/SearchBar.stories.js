import React from 'react';
import SearchBar from './SearchBar';


export default {
  component: SearchBar,
  title: 'SearchBar',
};

export const normal = () => <SearchBar onSubmit={() => {}} />;
normal.story = {
  name: 'default'
};
