import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './Header';

const store = {
  getState: () => {
    return {
      modal: 'modal',
    };
  },
  subscribe: () => 0,
  dispatch: () => {},
};

export default {
  component: Header,
  title: 'Header',
  decorators: [
    (story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>,
    (story) => <Provider store={store}>{story()}</Provider>
  ]
};

export const normal = () => <Header />;
normal.story = {
  name: 'default'
};
