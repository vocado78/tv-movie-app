import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import BrowserBar from './BrowseBar';

const store = {
  getState: () => {
    return {
      dropdowns: {
        activeGenre: 'genre',
        activeDecade: 'decade'
      },
    };
  },
  subscribe: () => 0,
  dispatch: () => {}
};

export default {
  component: BrowserBar,
  title: 'BrowserBar',
  decorators: [
    (story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>,
    (story) => <Provider store={store}>{story()}</Provider>
  ]
};

export const normal = () => <BrowserBar />;
normal.story = {
  name: 'default'
};
