import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';


export default function NavItem({ className, label, to }) {
  return (
    <li>
      <Link className={className} to={to}>{label}</Link>
    </li>
  );
}

NavItem.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};
