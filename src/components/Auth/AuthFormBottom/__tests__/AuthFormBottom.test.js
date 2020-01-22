import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import AuthFormBottom from '../AuthFormBottom';
import LABELS from '../../../../constants/buttonLabels';
import MODAL_IDS from '../../../../constants/modalIds';


const createProps = (modalId = '') => ({
  modalId,
  hideModal: () => {},
  showModal: () => {}
});

describe('AuthError', () => {
  it('renders login elements if modalId is LOG_IN', () => {
    const props = createProps(MODAL_IDS.LOG_IN);
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/']}>
        <AuthFormBottom {...props} />
      </MemoryRouter>
    );

    expect(getByTestId('auth-form-bottom').children[0].innerHTML).toEqual(LABELS.LOG_IN);
  });

  it('renders signup elements if modalId is SIGN_UP', () => {
    const props = createProps(MODAL_IDS.SIGN_UP);
    const { getByTestId } = render(
      <MemoryRouter initialEntries={['/']}>
        <AuthFormBottom {...props} />
      </MemoryRouter>
    );

    expect(getByTestId('auth-form-bottom').innerHTML).not.toContain('Forgot my password');
    expect(getByTestId('auth-form-bottom').children[0].innerHTML).toEqual(LABELS.CREATE_ACCOUNT);
  });
});
