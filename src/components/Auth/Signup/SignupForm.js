/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import Form from '../../Form/Form';
import AuthError from '../AuthError/AuthError';
import AuthFormBottom from '../AuthFormBottom/AuthFormBottom';
import { signupAttrs } from '../../../content/forms';
import { withFirebase } from '../../Firebase/FirebaseContext';
import { hideModal, showModal } from '../../../actions';
import { validateSignup } from '../../../helpers/validate';
import MODAL_IDS from '../../../constants/modalIds';
import ROUTES from '../../../constants/routes';

// TODO: fix styling when error msgs appear, right now modal becomes higher to account for the extra content
export class SignupForm extends Component {
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
        return this.props.firebase.doSendEmailVerification();
      })
      .then(() => {
        this.props.hideModal();
        this.props.history.push(ROUTES.PROFILE);
      })
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
          formStyle="mt-6"
          onSubmit={this.onSubmit}
          otherAttrs={signupAttrs}
          inputStyle="text-input"
          validate={validateSignup}
        >
          <AuthFormBottom
            modalId={MODAL_IDS.SIGN_UP}
            hideModal={this.props.hideModal}
            showModal={this.props.showModal}
          />
        </Form>
      </>
    );
  }
}

export default compose(
  withFirebase,
  withRouter,
  connect(
    null,
    { hideModal, showModal }
  )
)(SignupForm);

SignupForm.propTypes = {
  firebase: PropTypes.object.isRequired,
  hideModal: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};
