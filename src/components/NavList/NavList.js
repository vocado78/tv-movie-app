import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';


export default function NavList({ children, className }) {
  return (
    <ul className={className}>
      {children}
    </ul>
  );
}

NavList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired
};
