import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import TopNav from '..';
import FirebaseContext from '../../../Firebase/FirebaseContext';
import FirebaseMock from '../../../Auth/__mocks__/FirebaseMock';

const showModalStub = () => {};

const renderWithFb = (ui) => {
  return {
    ...render(
      <FirebaseContext.Provider value={new FirebaseMock()}>
        <MemoryRouter initialEntries={['/']}>
          {ui}
        </MemoryRouter>
      </FirebaseContext.Provider>
    )
  };
};

it('displays login link if isLoggedIn is false', () => {
  const { getByText } = renderWithFb(<TopNav isLoggedIn={null} showModal={showModalStub} />);

  expect(getByText('Log In')).not.toBeNull();
});

it('displays logout link if isLoggedIn is true', () => {
  const { getByText } = renderWithFb(<TopNav isLoggedIn={{ authUser: { uid: '' } }} showModal={showModalStub} />);

  expect(getByText('Log Out')).not.toBeNull();
});
