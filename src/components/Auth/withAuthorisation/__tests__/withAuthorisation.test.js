import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import reducers from '../../../../reducers';
import ComponentMock from '../../__mocks__/ComponentMock';
import withAuthorisation from '../withAuthorisation';


const authUser = { user: { uid: 'uid' } };
const WrappedComponent = withAuthorisation(ComponentMock);

const renderWithRedux = (
  Component,
  { initialState = { auth: authUser }, store = createStore(reducers, initialState) } = {}
) => {
  return {
    ...render(
      <Provider store={store}>
        {Component}
      </Provider>
    ),
    store
  };
};

const renderWithReduxAndRouter = (
  Component,
  { initialState = { auth: authUser }, store = createStore(reducers, initialState) } = {},
  history
) => {
  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>
          {Component}
        </Router>
      </Provider>
    )
  };
};

describe('withAuthorisation', () => {
  it('renders wrapped component if an auth user', () => {
    const { getByText } = renderWithRedux(<WrappedComponent />);

    expect(getByText('I am the body text.')).not.toBeNull();
  });

  it('renders nothing and redirects if no auth user', () => {
    const history = createMemoryHistory({ initialEntries: ['/profile'] });
    expect(history.location.pathname).toEqual('/profile');

    const { container } = renderWithReduxAndRouter(
      <WrappedComponent />,
      { initialState: { auth: null } },
      history
    );

    expect(container.innerHTML).toBe('');
    expect(history.location.pathname).toEqual('/');
  });

  it('updates modal state on unmount', () => {
    const { container, unmount, store } = renderWithRedux(<WrappedComponent />);
    expect(container.innerHTML).toContain('I am the body text.');

    unmount();

    expect(store.getState().modal).toEqual('SIGN_UP');
    expect(container.innerHTML).toBe('');
  });
});
