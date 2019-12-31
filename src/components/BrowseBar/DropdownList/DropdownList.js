import React from 'react';

import DropdownListItem from './DropdownListItem/DropdownListItem';
import Dropdown from './Dropdown/Dropdown';
import dropdownItems from '../../../content/dropdown';
import { ReactComponent as ArrowDownIcon } from './arrow-down.svg';

export default function DropdownList() {
  const itemClass = 'dropdown-container w-32 px-4 py-1 border-r border-solid border-gray-600 last:border-r-0 relative hover:text-white hover:bg-gray-400 hover:rounded-t';

  return (
    <ul className="flex border border-solid border-gray-600 rounded px-1 py-px">
      {dropdownItems.map(({ id, label, items }) => {
        return (
          <DropdownListItem key={id} itemClass={itemClass} childClass="tracking-wider inline" label={label}>
            <ArrowDownIcon className="inline ml-2 fill-current" />
            <Dropdown items={items} />
          </DropdownListItem>
        );
      })}
    </ul>
  );
}
