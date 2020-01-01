import React from 'react';
import PropTypes from 'prop-types';

import DropdownTitle from './DropdownTitle/DropdownTitle';
import DropdownItem from './DropdownItem/DropdownItem';


export default function Dropdown({ title, items, onClick }) {
  const dropdownContentClass = 'hidden absolute -ml-4 mt-1 bg-gray-400 border-t border-solid border-gray-600 text-gray-600 capitalize rounded-b py-1 px-3 w-32 dropdown-content';

  return (
    <ul>
      <DropdownTitle title={title}>
        <ul className={dropdownContentClass}>
          {items.map(({ id, label }) => {
            return (
              <DropdownItem
                key={id}
                id={label}
                label={label}
                onClick={onClick}
              />
            );
          })}
        </ul>
      </DropdownTitle>
    </ul>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  // path: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
