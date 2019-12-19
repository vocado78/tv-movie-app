import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { LogoutButton } from '../LogoutButton';
import LABELS from '../../../../constants/buttonLabels';


const firebaseMock = {
  doSignOut: jest.fn()
};

describe('LogoutButton', () => {
  it('renders', () => {
    const { container } = render(
      <LogoutButton firebase={firebaseMock} />
    );

    expect(container.innerHTML).toContain(LABELS.LOG_OUT);
  });

  it('calls signout method when clicked', () => {
    const { getByText } = render(
      <LogoutButton firebase={firebaseMock} />
    );

    fireEvent.click(getByText(LABELS.LOG_OUT));

    expect(firebaseMock.doSignOut).toHaveBeenCalledTimes(1);
  });
});
