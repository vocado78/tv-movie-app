/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';


export default function AuthError({ error }) {
  return (
    <p className="text-sm text-red-600 my-4">{error.message}</p>
  );
}

// AuthError.defaultProps = {
//   error: null
// };

AuthError.propTypes = {
  error: PropTypes.object.isRequired
};
