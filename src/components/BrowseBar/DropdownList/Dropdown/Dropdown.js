import React from 'react';
import PropTypes from 'prop-types';

import List from '../../../List/List';
import NavItem from '../../../NavItem/NavItem';


export default function Dropdown({ items }) {
  return (
    <List
      listClass="hidden absolute -ml-4 mt-1 bg-gray-400 border-t border-solid border-gray-600 text-gray-600 capitalize rounded-b py-1 px-3 w-32 dropdown-content"
      itemClass="text-sm py-2 whitespace-no-wrap hover:text-white"
      items={items}
      component={NavItem}
    />
  );
}

Dropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};
