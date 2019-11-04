import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';


export default function Container({ children, className }) {
  return (
    <div className={`flex w-240 my-0 mx-auto ${className}`}>{children}</div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Container.defaultProps = {
  className: ''
};
