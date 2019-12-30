import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


export default function TestItem({ className, label, to, onClick }) {
  // const path = window.location.pathname.split('/');
  // console.log(path);

  return (
    <li>
      <Link className={className} to={to} onClick={onClick}>{label}</Link>
    </li>
  );
}

TestItem.defaultProps = {
  onClick: () => {}
};

TestItem.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func
};
