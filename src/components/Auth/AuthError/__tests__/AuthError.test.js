import React from 'react';
import { render } from '@testing-library/react';

import AuthError from '../AuthError';


const props = {
  error: {
    code: '1234',
    message: 'Ooops, an error happened.',
  }
};

describe('AuthError', () => {
  it('renders with an error message', () => {
    const { getByTestId } = render(<AuthError {...props} />);

    expect(getByTestId('auth-error').innerHTML).toEqual(props.error.message);
  });
});
