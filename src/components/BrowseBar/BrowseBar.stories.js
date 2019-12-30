import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import BrowserBar from './BrowseBar';


export default {
  component: BrowserBar,
  title: 'BrowserBar',
  decorators: [
    (story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ]
};

export const normal = () => <BrowserBar />;
normal.story = {
  name: 'default'
};
