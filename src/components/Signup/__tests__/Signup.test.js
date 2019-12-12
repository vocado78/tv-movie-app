/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { authReducer } from '../../../reducers';
import FirebaseContext from '../../Firebase/FirebaseContext';
import Signup from '../Signup';
import FirebaseMock from '../__mocks__/FirebaseMock';


const store = createStore(authReducer);

const renderWithFbAndRedux = (ui) => {
  return {
    ...render(
      <Provider store={store}>
        <FirebaseContext.Provider value={new FirebaseMock()}>
          <MemoryRouter initialEntries={['/']}>
            {ui}
          </MemoryRouter>
        </FirebaseContext.Provider>
      </Provider>
    )
  };
};

const props = {
  closeModal: () => {},
  onKeyDown: () => {},
  onMount: () => {},
  onUnmount: () => {}
};

describe('Signup', () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element;
    });
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });

  it('renders with redux and fb with defaults', () => {
    const { getByText } = renderWithFbAndRedux(<Signup {...props} />);
    expect(getByText('Create An Account')).not.toBeNull();
  });

  it('redirects user to /profile route on successful signup', () => {
    // const { getByText } = renderWithFbAndRedux(<Signup props={propsMock} />);
  });
});
