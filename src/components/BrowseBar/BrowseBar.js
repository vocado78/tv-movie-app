import React from 'react';

import DropdownList from './DropdownList/DropdownList';

export default function BrowseBar() {
  return (
    <div className="flex items-center text-gray-400 text-sm uppercase">
      <h3 className="mr-6 tracking-wider">Browse by</h3>
      <DropdownList />
    </div>
  );
}
