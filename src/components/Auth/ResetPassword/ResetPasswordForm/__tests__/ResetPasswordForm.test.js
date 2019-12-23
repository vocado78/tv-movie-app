import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';

import { ResetPasswordForm } from '../ResetPasswordForm';
import LABELS from '../../../../../constants/buttonLabels';
import FirebaseMock from '../../../__mocks__/FirebaseMock';


const props = {
  firebase: new FirebaseMock()
};

describe('ResetPasswordForm', () => {
  it('renders with props', () => {
    const { getByText } = render(<ResetPasswordForm {...props} />);
    expect(getByText(LABELS.RESET_PASSWORD)).not.toBeNull();
  });

  it('displays no error if sending reset email is successful', async () => {
    const { getByLabelText, getByText, container } = render(<ResetPasswordForm {...props} />);

    fireEvent.change(getByLabelText(/e-mail address/i), { target: { value: 'test@test.com' } });
    fireEvent.click(getByText(LABELS.RESET_PASSWORD));

    await wait(() => {
      expect(container.innerHTML).not.toContain('User not found.');
    });
  });

  it('displays error if sending reset email fails', async () => {
    const { getByLabelText, getByText, container } = render(<ResetPasswordForm {...props} />);

    fireEvent.change(getByLabelText(/e-mail address/i), { target: { value: 'nonexistingemail@test.com' } });
    fireEvent.click(getByText(LABELS.RESET_PASSWORD));

    await wait(() => {
      expect(container.innerHTML).toContain('User not found.');
    });
  });
});
