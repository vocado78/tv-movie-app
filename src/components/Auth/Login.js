/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import Modal from '../Modal/Modal';
import Form from '../Form/Form';
import { loginAttrs } from '../../content/forms';
import { withFirebase } from '../Firebase/FirebaseContext';
import { hideModal } from '../../actions';
import { validateLogin } from '../../helpers/validate';


export class Login extends Component {
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
    const { closeModal, onKeyDown, onMount, onUnmount } = this.props;
    const { error } = this.state;

    return (
      <Modal
        title="Log In"
        closeModal={closeModal}
        onKeyDown={onKeyDown}
        onMount={onMount}
        onUnmount={onUnmount}
      >
        {error && <p>{error.message}</p>}
        <Form
          formStyle="mt-6"
          onSubmit={this.onSubmit}
          otherAttrs={loginAttrs}
          inputStyle="text-input"
          buttonLabel="Log In"
          buttonStyle="btn btn-primary"
          validate={validateLogin}
        />
        <Link to="/reset-password" className="text-xs" onClick={this.props.hideModal}>I forgot my password</Link>
        <p className="text-xs">Do not have an account? Create an account.</p>
      </Modal>
    );
  }
}

export default connect(null, { hideModal })(withRouter((withFirebase(Login))));

Login.propTypes = {
  closeModal: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onMount: PropTypes.func.isRequired,
  onUnmount: PropTypes.func.isRequired,
  firebase: PropTypes.object.isRequired,
  hideModal: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};
