import React from 'react';
import PropTypes from 'prop-types';

import DropdownTitle from './DropdownTitle/DropdownTitle';
import DropdownItem from './DropdownItem/DropdownItem';


export default function Dropdown({ title, items }) {
  const dropdownContentClass = 'hidden absolute -ml-4 mt-1 px-3 w-full bg-gray-400 border-t border-solid border-gray-600 text-gray-600 rounded-b py-1 dropdown-content';

  return (
    <DropdownTitle title={title}>
      <ul className={dropdownContentClass}>
        {items.map(({ type, label }) => {
          return (
            <DropdownItem
              key={label}
              type={type}
              label={label}
            />
          );
        })}
      </ul>
    </DropdownTitle>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};
