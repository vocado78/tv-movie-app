import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import NavItem from './NavItem';

export default {
  title: 'NavItem',
  decorators: [(story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>],
};

export const normal = () => <NavItem className="mr-5 px-3 py-1 text-gray-600" to="/default/" label="Default" />;
export const primaryBtn = () => <NavItem className="btn btn-primary" to="/primary-btn/" label="Primary btn" />;
export const secondaryBtn = () => <NavItem className="btn btn-secondary" to="/secondary-btn/" label="Secondary btn" />;
