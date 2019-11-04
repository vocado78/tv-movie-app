import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import NavList from '../NavList/NavList';
import NavItem from '../NavItem/NavItem';
import topNavItems from '../../content/topNav';


export default function TopNav({ isLoggedIn }) {
  const navItems = topNavItems.filter((item) => {
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
