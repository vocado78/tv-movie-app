import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


export default function NavItem({ className, label, to, onClick }) {
  return (
    <li>
      <Link className={className} to={to} onClick={onClick}>{label}</Link>
    </li>
  );
}

NavItem.defaultProps = {
  onClick: () => {}
};

NavItem.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func
};
