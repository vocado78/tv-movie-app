import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Hero from './Hero';


const store = {
  getState: () => {},
  subscribe: () => 0,
  dispatch: () => {},
};

export default {
  component: Hero,
  title: 'Hero',
  decorators: [
    (story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>,
    (story) => <Provider store={store}>{story()}</Provider>
  ]
};

export const normal = () => <Hero />;
normal.story = {
  name: 'default'
};
