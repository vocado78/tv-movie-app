import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../Modal/Modal';
import SignupForm from './SignupForm';


export default function Signup({
  closeModal,
  onKeyDown,
  onMount,
  onUnmount
}) {
  return (
    <Modal
      title="Create An Account"
      closeModal={closeModal}
      onKeyDown={onKeyDown}
      onMount={onMount}
      onUnmount={onUnmount}
    >
      <SignupForm />
    </Modal>
  );
}

Signup.propTypes = {
  closeModal: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onMount: PropTypes.func.isRequired,
  onUnmount: PropTypes.func.isRequired
};
