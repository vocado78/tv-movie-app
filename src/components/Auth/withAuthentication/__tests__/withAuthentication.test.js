import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from '../../../../reducers';
import { FirebaseContext } from '../../../Firebase';
import { firebaseObserverMock } from '../../__mocks__/FirebaseMock';
import ComponentMock from '../../__mocks__/ComponentMock';
import withAuthentication from '../withAuthentication';


const WrappedComponent = withAuthentication(ComponentMock);

const renderWithReduxFB = (
  Component,
  store = createStore(reducers)
) => {
  return {
    ...render(
      <Provider store={store}>
        <FirebaseContext.Provider value={firebaseObserverMock}>
          {Component}
        </FirebaseContext.Provider>
      </Provider>
    ),
    store
  };
};

describe('withAuthentication', () => {
  it('renders wrapped component', () => {
    const { getByText } = renderWithReduxFB(<WrappedComponent />);

    expect(getByText('I am the body text.')).not.toBeNull();
  });

  // see mock implementations in firebase observer mock
  it('sets an authUser on localStorage if authUser from observer', () => {
    const { getByText, store } = renderWithReduxFB(<WrappedComponent />);

    expect(localStorage).toHaveProperty('authUser');
    expect(store.getState().auth).toBeTruthy();
    expect(getByText('I am the body text.')).not.toBeNull();
  });

  it('removes authUser from localStorage if no authUser from observer', () => {
    const { getByText, store } = renderWithReduxFB(<WrappedComponent />);

    expect(localStorage).not.toHaveProperty('authUser');
    expect(store.getState().auth).toBeFalsy();
    expect(getByText('I am the body text.')).not.toBeNull();
  });
});
