/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';


export default function Button({
  type,
  className,
  label,
  onClick,
  disabled,
  children
}) {
  return (
    <button type={type} className={className} onClick={onClick} disabled={disabled}>
      {label}
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  disabled: false,
  onClick: () => {},
  children: null
};

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node
};
