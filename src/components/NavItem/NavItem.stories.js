import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import NavItem from './NavItem';

export default {
  title: 'NavItem',
  decorators: [(story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>],
};

export const normal = () => <NavItem className="px-3 py-1 text-gray-600" to="/default/" label="Default" />;
normal.story = {
  name: 'default'
};
