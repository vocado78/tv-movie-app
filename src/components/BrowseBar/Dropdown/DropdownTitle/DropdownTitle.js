import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as ArrowDownIcon } from './arrow-down.svg';

export default function DropdownTitle({ title, children }) {
  const titleClass = 'dropdown-container w-32 px-4 py-1 border-r border-solid border-gray-600 last:border-r-0 relative hover:text-white hover:bg-gray-400 hover:rounded-t';

  return (
    <li className={titleClass}>
      <p className="tracking-wider inline">{title}</p>
      <ArrowDownIcon className="inline ml-2 fill-current" />
      {children}
    </li>
  );
}

DropdownTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
