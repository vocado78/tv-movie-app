import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { PureTopNav } from '../TopNav';

const showModalStub = () => {};

it('displays login link if isLoggedIn is false', () => {
  const { getByText } = render(<MemoryRouter initialEntries={['/']}><PureTopNav isLoggedIn={false} showModal={showModalStub} /></MemoryRouter>);

  expect(getByText('Log In')).not.toBeNull();
});

it('displays logout link if isLoggedIn is true', () => {
  const { getByText } = render(<MemoryRouter initialEntries={['/']}><PureTopNav isLoggedIn showModal={showModalStub} /></MemoryRouter>);

  expect(getByText('Log Out')).not.toBeNull();
});
