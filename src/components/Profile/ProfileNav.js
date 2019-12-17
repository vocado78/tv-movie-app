import React from 'react';

import List from '../List';
import NavItem from '../NavItem';
import profileNavItems from '../../content/profileNav';


export default function ProfileNav() {
  return (
    <nav className="px-1 py-2">
      <List
        listClass="flex border border-solid border-gray-500 rounded p-1"
        itemClass="border-r border-solid border-gray-500 text-sm px-4"
        items={profileNavItems}
        component={NavItem}
      />
    </nav>
  );
}
