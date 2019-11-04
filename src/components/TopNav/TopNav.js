import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import NavList from '../NavList/NavList';
import NavItem from '../NavItem/NavItem';
// import topNavItems from '../../content/topNav.yml';


const items = [
  { label: 'Films', to: '/films/' },
  { label: 'TV-shows', to: '/tv-shows/' },
  { label: 'Lists', to: '/lists/' },
  { label: 'Discussions', to: '/discussions/' },
  { label: 'Sign Up', to: '/signup/' },
  { label: 'Log In', to: '/login/' },
  { label: 'My Profile', to: '/myprofile/' },
  { label: 'Sign Out', to: '/' },
];

export default function TopNav({ isLoggedIn }) {
  const navItems = items.filter((item) => {
    if (isLoggedIn) {
      return item.label !== 'Sign Up' && item.label !== 'Log In';
    }
    return item.label !== 'My Profile' && item.label !== 'Sign Out';
  }).map((item) => (
    <NavItem
      className="px-3 py-1 text-gray-600"
      key={item.label}
      label={item.label}
      to={item.to}
    />
  ));

  return (
    <nav className="w-3/4">
      <NavList className="flex list-none">{navItems}</NavList>
    </nav>
  );
}

TopNav.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};
