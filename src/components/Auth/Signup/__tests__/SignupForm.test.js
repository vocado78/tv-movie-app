/* eslint-disable no-unused-vars */
import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';

import { SignupForm } from '../SignupForm';
import ROUTES from '../../../../constants/routes';
import LABELS from '../../../../constants/buttonLabels';
import FirebaseMock from '../../__mocks__/FirebaseMock';


const props = {
  history: {
    push: jest.fn()
  },
  firebase: new FirebaseMock(),
  hideModal: jest.fn(),
  showModal: () => {}
};

describe('SignupForm', () => {
  afterEach(() => {
    props.history.push.mockClear();
    props.hideModal.mockClear();
  });

  it('renders', () => {
    const { getByText } = render(<SignupForm {...props} />);
    expect(getByText(LABELS.CREATE_ACCOUNT)).not.toBeNull();
  });

  it('calls hideModal, email verification, and navigates to /profile on successful signup', async () => {
    const { getByText, getByLabelText } = render(<SignupForm {...props} />);

    fireEvent.change(getByLabelText(/username/i), { target: { value: 'Tester' } });
    fireEvent.change(getByLabelText(/e-mail address/i), { target: { value: 'test@test.com' } });
    fireEvent.change(getByLabelText(/password/i), { target: { value: 'Testing123' } });

    fireEvent.click(getByText(LABELS.CREATE_ACCOUNT));

    await wait(() => {
      expect(props.firebase.doSendEmailVerification).toHaveBeenCalledTimes(1);
      expect(props.history.push).toHaveBeenCalledWith(ROUTES.PROFILE);
      expect(props.hideModal).toHaveBeenCalledTimes(1);
    });
  });

  // uses an "existing" email address, see FirebaseMock
  it('displays an auth error message if signup fails', async () => {
    const { getByText, getByLabelText } = render(<SignupForm {...props} />);

    fireEvent.change(getByLabelText(/username/i), { target: { value: 'Tester' } });
    fireEvent.change(getByLabelText(/e-mail address/i), { target: { value: 'exist@test.com' } });
    fireEvent.change(getByLabelText(/password/i), { target: { value: 'Testing123' } });

    fireEvent.click(getByText(LABELS.CREATE_ACCOUNT));

    await wait(() => {
      expect(getByText('Email already in use.')).not.toBeNull();
    });
  });
});
