import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import TopNavBar from '../TopNavBar';


it('displays login button with default props', () => {
  const { getByText } = render(<MemoryRouter initialEntries={['/']}><TopNavBar /></MemoryRouter>);

  expect(getByText('Log In')).not.toBeNull();
});

it('displays logout button if isLoggedIn is true', () => {
  const { getByText } = render(<MemoryRouter initialEntries={['/']}><TopNavBar isLoggedIn /></MemoryRouter>);

  expect(getByText('Log Out')).not.toBeNull();
});
