import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import TopNav from './TopNav';

export default {
  component: TopNav,
  title: 'TopNav',
  decorators: [(story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>]
};

export const loggedOut = () => <TopNav isLoggedIn={false} />;
export const loggedIn = () => <TopNav isLoggedIn />;
