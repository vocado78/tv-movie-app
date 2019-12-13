/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import { withFirebase } from '../Firebase/FirebaseContext';

const Logout = ({ firebase, className }) => {
  return (
    <li>
      <button type="button" className={className} onClick={firebase.doSignOut}>
        Log Out
      </button>
    </li>
  );
};

export default withFirebase(Logout);

Logout.propTypes = {
  firebase: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired
};
