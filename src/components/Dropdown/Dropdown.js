import React from 'react';
import PropTypes from 'prop-types';

import DropdownTitle from './DropdownTitle/DropdownTitle';
import List from '../List/List';


export default function Dropdown({ title, ...props }) {
  const dropdownContentClass = 'hidden absolute -ml-4 mt-1 px-3 w-full bg-gray-400 border-t border-solid border-gray-600 text-gray-600 rounded-b py-1 dropdown-content';

  return (
    <DropdownTitle title={title}>
      <List listClass={dropdownContentClass} {...props} />
    </DropdownTitle>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired
};
