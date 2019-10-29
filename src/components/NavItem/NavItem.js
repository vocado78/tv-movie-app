import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';


export default function NavItem({ label, path, type }) {
  const styles = type ? `btn ${type}` : 'px-3 py-1 text-gray-600';

  return (
    <li>
      <Link className={styles} to={path}>{label}</Link>
    </li>
  );
}

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  type: PropTypes.string
};

NavItem.defaultProps = {
  type: ''
};
