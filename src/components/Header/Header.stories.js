import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

export default {
  component: Header,
  title: 'Header',
  decorators: [(story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>]
};

export const normal = () => <Header />;
normal.story = {
  name: 'default'
};
