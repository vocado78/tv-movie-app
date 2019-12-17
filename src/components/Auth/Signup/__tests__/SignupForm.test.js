/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import reducers from '../../../../reducers';
import FirebaseContext from '../../../Firebase/FirebaseContext';
import SignupForm from '../SignupForm';
import FirebaseMock from '../../__mocks__/FirebaseMock';


const store = createStore(reducers);

const renderWithFbAndRedux = (ui) => {
  return {
    ...render(
      <Provider store={store}>
        <FirebaseContext.Provider value={new FirebaseMock()}>
          <Router history={createMemoryHistory()}>
            {ui}
          </Router>
        </FirebaseContext.Provider>
      </Provider>
    )
  };
};


describe('SignupForm', () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element;
    });
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });

  it('renders with redux and fb with defaults', () => {
    const { getByText } = renderWithFbAndRedux(<SignupForm />);
    expect(getByText('Create Account')).not.toBeNull();
  });
});
