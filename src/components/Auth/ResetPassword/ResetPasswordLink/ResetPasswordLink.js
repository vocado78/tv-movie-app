import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ROUTES from '../../../../constants/routes';


export default function ResetPasswordLink({ onClick }) {
  return (
    <Link to={ROUTES.RESET_PASSWORD} className="text-xs" onClick={onClick}>
      Forgot my password
    </Link>
  );
}

ResetPasswordLink.propTypes = {
  onClick: PropTypes.func.isRequired
};
