/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../../Modal/Modal';
import LoginForm from './LoginForm';


export default function Login({
  closeModal,
  onKeyDown,
  onMount,
  onUnmount
}) {
  return (
    <Modal
      title="Log In"
      closeModal={closeModal}
      onKeyDown={onKeyDown}
      onMount={onMount}
      onUnmount={onUnmount}
    >
      <LoginForm />
    </Modal>
  );
}

Login.propTypes = {
  closeModal: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onMount: PropTypes.func.isRequired,
  onUnmount: PropTypes.func.isRequired
};
