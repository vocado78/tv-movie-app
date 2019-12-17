/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import { withFirebase } from '../Firebase';

const LogoutButton = ({ firebase }) => {
  return (
    <li>
      <Button
        type="button"
        className="btn btn-primary"
        onClick={firebase.doSignOut}
        label="Log Out"
      />
    </li>
  );
};

export default withFirebase(LogoutButton);

LogoutButton.propTypes = {
  firebase: PropTypes.object.isRequired
};
