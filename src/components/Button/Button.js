/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';


export default function Button({
  type,
  className,
  label,
  onClick,
  disabled
}) {
  return (
    <button type={type} className={className} onClick={onClick} disabled={disabled}>{label}</button>
  );
}

Button.defaultProps = {
  disabled: false,
  onClick: () => {}
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};
