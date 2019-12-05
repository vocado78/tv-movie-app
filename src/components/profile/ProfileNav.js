import React from 'react';

import List from '../List/List';
import NavItem from '../NavItem/NavItem';
import profileNavItems from '../../content/profileNav';


export default function ProfileNav() {
  return (
    <nav>
      <List
        listClass=""
        itemClass=""
        items={profileNavItems}
        component={NavItem}
      />
    </nav>
  );
}
