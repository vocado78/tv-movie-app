import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { PureTopNav } from './TopNav';

export default {
  component: PureTopNav,
  title: 'TopNav',
  decorators: [(story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>]
};

export const loggedOut = () => <PureTopNav showModal={() => {}} isLoggedIn={false} />;
export const loggedIn = () => <PureTopNav showModal={() => {}} isLoggedIn />;
