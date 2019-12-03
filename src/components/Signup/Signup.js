import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal/Modal';
import Form from '../Form/Form';
import signupAttrs from '../../content/forms';


export default class Signup extends Component {
  onSubmit = () => {

  }

  render() {
    const { closeModal, onKeyDown, onMount, onUnmount } = this.props;

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
          onSubmit={() => {}}
          otherAttrs={signupAttrs}
          inputStyle="text-input"
          buttonLabel="Sign Up"
          buttonStyle="btn btn-primary"
        />
      </Modal>
    );
  }
}

Signup.propTypes = {
  closeModal: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onMount: PropTypes.func.isRequired,
  onUnmount: PropTypes.func.isRequired
};
