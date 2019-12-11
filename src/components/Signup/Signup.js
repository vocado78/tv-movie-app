import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Modal from '../Modal/Modal';
import Form from '../Form/Form';
import signupAttrs from '../../content/forms';
import { withFirebase } from '../Firebase/FirebaseContext';
import { setAuthUser } from '../../actions';

// TODO validate fn: username should be unique
// TODO onSubmit: create user in db, fb email verification, error handling

class Signup extends Component {
  onSubmit = ({ email, password }) => {
    console.log(email, password);
    this.props.firebase.doCreateUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        this.props.setAuthUser(authUser);
        console.log(authUser);
      })
      .catch((error) => {
        console.log('An error happened', error);
        // use local state for error messages
      });
  }

  validate = (values) => {
    const errors = {};
    const pwRegex = /(?!^[0-9]*$)(?!^[a-z]*$)(?!^[A-Z]*$)^([a-zA-Z0-9]{8,15})$/;

    if (!values.username) {
      errors.username = 'This field is required.';
    }
    if (values.username.length < 5) {
      errors.username = 'Your username must be at least 5 characters long.';
    }
    if (!values.email) {
      errors.email = 'This field is required.';
    }
    if (!values.password) {
      errors.password = 'This field is required.';
    }
    if (values.password.length < 8 || values.password.length > 14) {
      errors.password = 'Your password must be between 8 and 15 characters long.';
    }
    if (!pwRegex.test(values.password)) {
      errors.password = 'Your password must contain at least 1 digit, 1 uppercase letter, and 1 lowercase letter.';
    }

    return errors;
  }

  render() {
    const { closeModal, onKeyDown, onMount, onUnmount } = this.props;

    if (this.state.authUser) {
      return <Redirect to="/profile" />;
    }

    return (
      <Modal
        title="Create An Account"
        closeModal={closeModal}
        onKeyDown={onKeyDown}
        onMount={onMount}
        onUnmount={onUnmount}
      >
        <Form
          formStyle="mt-6"
          onSubmit={this.onSubmit}
          otherAttrs={signupAttrs}
          inputStyle="text-input"
          buttonLabel="Sign Up"
          buttonStyle="btn btn-primary"
        />
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return { authUser: state.auth };
};

export default connect(mapStateToProps, { setAuthUser })(withFirebase(Signup));

Signup.propTypes = {
  closeModal: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onMount: PropTypes.func.isRequired,
  onUnmount: PropTypes.func.isRequired,
  firebase: PropTypes.objectOf(
    PropTypes.func
  ).isRequired,
  setAuthUser: PropTypes.func.isRequired
};
