import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as ArrowDownIcon } from './arrow-down.svg';


export default function DropdownTitle({ label, children }) {
  const titleClass = 'dropdown-container px-4 py-1 min-w-32 border-r border-solid border-gray-600 last:border-r-0 relative hover:text-white hover:bg-gray-400 hover:rounded-t';

  return (
    <li className={titleClass}>
      <p className="tracking-wider inline uppercase">{label}</p>
      <ArrowDownIcon className="inline ml-2 fill-current" />
      {children}
    </li>
  );
}

DropdownTitle.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
