/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withFirebase } from '../../Firebase/FirebaseContext';
import Form from '../../Form/Form';
import AuthError from '../AuthError';
import { resetAttrs } from '../../../content/forms';
import { validateReset } from '../../../helpers/validate';


class ResetPasswordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  onSubmit = ({ email }) => {
    this.props.firebase.doPasswordReset(email)
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    const { error } = this.state;

    return (
      <>
        {error && <AuthError error={error} />}
        <Form
          formStyle="mt-6 rounded bg-gray-300"
          onSubmit={this.onSubmit}
          otherAttrs={resetAttrs}
          inputStyle="text-input"
          buttonLabel="Reset Password"
          buttonStyle="btn btn-primary"
          validate={validateReset}
        />
      </>
    );
  }
}

export default withFirebase(ResetPasswordForm);

ResetPasswordForm.propTypes = {
  firebase: PropTypes.object.isRequired
};
