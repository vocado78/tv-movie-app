import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import TopNav from '../TopNav';


it('displays login link if isLoggedIn is false', () => {
  const { getByText } = render(<MemoryRouter initialEntries={['/']}><TopNav isLoggedIn={false} /></MemoryRouter>);

  expect(getByText('Log In')).not.toBeNull();
});

it('displays logout link if isLoggedIn is true', () => {
  const { getByText } = render(<MemoryRouter initialEntries={['/']}><TopNav isLoggedIn /></MemoryRouter>);

  expect(getByText('Log Out')).not.toBeNull();
});
