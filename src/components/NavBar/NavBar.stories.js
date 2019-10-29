import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from './NavBar';

export default {
  component: NavBar,
  title: 'NavBar',
  decorators: [(story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>]
};

export const loggedOut = () => <NavBar />;
export const loggedIn = () => <NavBar isLoggedIn />;
