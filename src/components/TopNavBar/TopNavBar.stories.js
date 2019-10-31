import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import TopNavBar from './TopNavBar';

export default {
  component: TopNavBar,
  title: 'TopNavBar',
  decorators: [(story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>]
};

export const loggedOut = () => <TopNavBar />;
export const loggedIn = () => <TopNavBar isLoggedIn />;
