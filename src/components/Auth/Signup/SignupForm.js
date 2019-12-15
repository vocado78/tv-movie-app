/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Form from '../../Form/Form';
import AuthError from '../AuthError';
import { signupAttrs } from '../../../content/forms';
import { withFirebase } from '../../Firebase/FirebaseContext';
import { hideModal } from '../../../actions';
import { validateSignup } from '../../../helpers/validate';

// TODO onSubmit: fb email verification

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  onSubmit = ({ username, email, password }) => {
    this.props.firebase.doCreateUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email
          });
      })
      .then(() => {
        this.props.hideModal();
        this.props.history.push('/profile');
      })
      .catch((error) => {
        console.log('An error happened', error);
        this.setState({ error });
      });
  }

  render() {
    const { error } = this.state;

    return (
      <>
        {error && <AuthError error={error} />}
        <Form
          formStyle="mt-6"
          onSubmit={this.onSubmit}
          otherAttrs={signupAttrs}
          inputStyle="text-input"
          buttonLabel="Create Account"
          buttonStyle="btn btn-primary"
          validate={validateSignup}
        />
      </>
    );
  }
}

export default connect(null, { hideModal })(withRouter((withFirebase(SignupForm))));

SignupForm.propTypes = {
  firebase: PropTypes.object.isRequired,
  hideModal: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};
