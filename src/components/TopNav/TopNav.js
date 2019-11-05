import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import List from '../List/List';
import NavItem from '../NavItem/NavItem';
import topNavItems from '../../content/topNav';


export default function TopNav({ isLoggedIn }) {
  const navItems = topNavItems.filter((item) => {
    if (isLoggedIn) {
      return item.label !== 'Sign Up' && item.label !== 'Log In';
    }
    return item.label !== 'My Profile' && item.label !== 'Log Out';
  });

  return (
    <nav className="w-3/4">
      <List
        listStyle="flex list-none"
        itemStyle="px-3 py-1 text-gray-600"
        items={navItems}
        component={NavItem}
      />
    </nav>
  );
}

TopNav.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};