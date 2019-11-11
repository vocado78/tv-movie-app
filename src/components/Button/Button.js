import React from 'react';
import PropTypes from 'prop-types';


export default function Button({ className, label, disabled }) {
  return (
    <button className={className} type="submit" disabled={disabled}>{label}</button>
  );
}

Button.defaultProps = {
  disabled: false
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};
