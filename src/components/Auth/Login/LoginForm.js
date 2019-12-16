/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Form from '../../Form/Form';
import AuthError from '../AuthError';
import AuthFormBottom from '../AuthFormBottom';
import { loginAttrs } from '../../../content/forms';
import { withFirebase } from '../../Firebase/FirebaseContext';
import { hideModal, showModal } from '../../../actions';
import { validateLogin } from '../../../helpers/validate';
import MODAL_IDS from '../../Modal/modalIds';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }

  onSubmit = ({ email, password }) => {
    this.props.firebase.doSignInWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log(authUser);
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
          otherAttrs={loginAttrs}
          inputStyle="text-input"
          validate={validateLogin}
        >
          <AuthFormBottom
            modalId={MODAL_IDS.LOG_IN}
            hideModal={this.props.hideModal}
            showModal={this.props.showModal}
          />
        </Form>
      </>
    );
  }
}

export default connect(null, { hideModal, showModal })(withRouter((withFirebase(LoginForm))));

LoginForm.propTypes = {
  firebase: PropTypes.object.isRequired,
  hideModal: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};
