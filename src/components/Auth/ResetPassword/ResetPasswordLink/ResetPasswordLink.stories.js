import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import ResetPasswordLink from './ResetPasswordLink';


export default {
  component: ResetPasswordLink,
  title: 'ResetPasswordLink',
  decorators: [(story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>]
};

export const normal = () => <ResetPasswordLink onClick={() => {}} />;
normal.story = {
  name: 'default'
};
