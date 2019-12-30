import React from 'react';

import Dropdown from './Dropdown/Dropdown';
import { genreDropdown, decadeDropdown } from '../../content/dropdown';

export default function BrowseBar() {
  return (
    <div className="flex items-center bg-gray-800 text-gray-400 text-sm uppercase">
      <h3 className="px-2">Browse by</h3>
      <ul className="flex border border-solid border-gray-600 rounded p-1">
        <li className="border-r border-solid border-gray-600 px-4 relative hover:text-white hover:bg-gray-400 w-32 test2">
          <a href="/">Genre</a>
          <Dropdown items={genreDropdown} />
        </li>
        <li className="border-r border-solid border-gray-600 px-4 relative hover:text-white w-32">
          <a href="/">Decade</a>
          <Dropdown items={decadeDropdown} />
        </li>
      </ul>
    </div>
  );
}
