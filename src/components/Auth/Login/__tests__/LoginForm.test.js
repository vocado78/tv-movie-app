import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, wait } from '@testing-library/react';

import { LoginForm } from '../LoginForm';
import LABELS from '../../../../constants/buttonLabels';
import ROUTES from '../../../../constants/routes';
import FirebaseMock from '../../__mocks__/FirebaseMock';


const props = {
  firebase: new FirebaseMock(),
  hideModal: jest.fn(),
  showModal: () => {},
  history: {
    push: jest.fn()
  }
};

const renderWithRouter = (Component) => ({
  ...render(
    <MemoryRouter initialEntries={['/']}>
      <Component {...props} />
    </MemoryRouter>
  )
});

describe('LoginForm', () => {
  afterEach(() => {
    props.history.push.mockClear();
    props.hideModal.mockClear();
  });

  it('renders', () => {
    const { getByText } = renderWithRouter(LoginForm);
    expect(getByText(LABELS.LOG_IN)).not.toBeNull();
  });

  it('calls hideModal and navigates to /profile on successful login', async () => {
    const { getByText, getByLabelText } = renderWithRouter(LoginForm);

    fireEvent.change(getByLabelText(/e-mail address/i), { target: { value: 'test@test.com' } });
    fireEvent.change(getByLabelText(/password/i), { target: { value: 'Password012' } });

    fireEvent.click(getByText(LABELS.LOG_IN));

    await wait(() => {
      expect(props.hideModal).toHaveBeenCalledTimes(1);
      expect(props.history.push).toHaveBeenCalledWith(ROUTES.PROFILE);
    });
  });

  // uses an "incorrect" password, see FirebaseMock
  it('displays an auth error message if login fails', async () => {
    const { getByText, getByLabelText } = renderWithRouter(LoginForm);

    fireEvent.change(getByLabelText(/e-mail address/i), { target: { value: 'test@test.com' } });
    fireEvent.change(getByLabelText(/password/i), { target: { value: 'Testing123' } });

    fireEvent.click(getByText(LABELS.LOG_IN));

    await wait(() => {
      expect(getByText('Wrong password.')).not.toBeNull();
    });
  });
});
