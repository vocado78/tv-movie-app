import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function ResetPasswordLink({ onClick }) {
  return (
    <Link to="/reset-password" className="text-xs" onClick={onClick}>
      Forgot my password
    </Link>
  );
}

ResetPasswordLink.propTypes = {
  onClick: PropTypes.func.isRequired
};
