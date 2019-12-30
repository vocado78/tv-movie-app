import React from 'react';
import PropTypes from 'prop-types';

import List from '../../List/List';
import TestItem from '../TestItem';


export default function Dropdown({ items }) {
  return (
    <List
      listClass="hidden absolute -ml-4 -mt-px bg-gray-400 text-gray-600 capitalize rounded p-1 w-32 test1"
      itemClass="text-sm py-2"
      items={items}
      component={TestItem}
    />
  );
}

Dropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};
