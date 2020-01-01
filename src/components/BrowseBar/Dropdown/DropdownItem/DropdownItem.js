import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


export default function DropdownItem({ id, label, onClick }) {
  return (
    <li className="text-sm py-px whitespace-no-wrap hover:text-white">
      <Link to="/films" onClick={onClick} id={id}>{label}</Link>
    </li>
  );
}

DropdownItem.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};
