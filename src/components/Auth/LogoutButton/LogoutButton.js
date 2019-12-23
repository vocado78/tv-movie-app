/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../Button/Button';
import { withFirebase } from '../../Firebase';
import LABELS from '../../../constants/buttonLabels';

export const LogoutButton = ({ firebase }) => {
  return (
    <li>
      <Button
        type="button"
        className="btn btn-primary"
        onClick={firebase.doSignOut}
        label={LABELS.LOG_OUT}
      />
    </li>
  );
};

export default withFirebase(LogoutButton);

LogoutButton.propTypes = {
  firebase: PropTypes.object.isRequired
};
