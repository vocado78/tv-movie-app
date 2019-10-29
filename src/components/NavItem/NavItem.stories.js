import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import NavItem from './NavItem';

export default {
  title: 'NavItem',
  decorators: [(story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>],
};

export const normal = () => <NavItem path="/test/" label="Test" />;
export const signUp = () => <NavItem path="/sign-up/" label="Sign Up" type="btn-primary" />;
export const logIn = () => <NavItem path="/login/" label="Log In" type="btn-secondary" />;
