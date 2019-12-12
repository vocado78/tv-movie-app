import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Modal from '../Modal/Modal';
import Form from '../Form/Form';
import signupAttrs from '../../content/forms';
import { withFirebase } from '../Firebase/FirebaseContext';
import { setAuthUser } from '../../actions';
import { validateSignup } from '../../helpers/validate';

// TODO onSubmit: create user in db, fb email verification

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  }

  onSubmit = ({ email, password }) => {
    console.log(email, password);
    this.props.firebase.doCreateUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        this.props.setAuthUser(authUser);
        console.log(authUser);
      })
      .catch((error) => {
        console.log('An error happened', error);
        this.setState({ error: error.message });
      });
  }

  render() {
    const { closeModal, onKeyDown, onMount, onUnmount } = this.props;
    const { error } = this.state;

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
        {error && <p>{error}</p>}
        <Form
          formStyle="mt-6"
          onSubmit={this.onSubmit}
          otherAttrs={signupAttrs}
          inputStyle="text-input"
          buttonLabel="Create Account"
          buttonStyle="btn btn-primary"
          validate={validateSignup}
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
  // eslint-disable-next-line react/forbid-prop-types
  firebase: PropTypes.object.isRequired,
  setAuthUser: PropTypes.func.isRequired
};
