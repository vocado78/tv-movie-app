import React from 'react';
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
    <nav className="w-2/3">
      <List
        listStyle="flex list-none"
        itemStyle="px-3 py-1 text-gray-400"
        items={navItems}
        component={NavItem}
      />
    </nav>
  );
}

TopNav.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};
