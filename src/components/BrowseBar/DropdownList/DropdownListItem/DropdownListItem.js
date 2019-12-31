import React from 'react';
import PropTypes from 'prop-types';


export default function DropdownListItem({
  itemClass,
  childClass,
  label,
  children
}) {
  return (
    <li className={itemClass}>
      <p className={childClass}>{label}</p>
      {children}
    </li>
  );
}

DropdownListItem.propTypes = {
  itemClass: PropTypes.string.isRequired,
  childClass: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
