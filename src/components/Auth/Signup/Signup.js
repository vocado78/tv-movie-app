import React from 'react';
import PropTypes from 'prop-types';

import ModalContent from '../../ModalContent/ModalContent';
import SignupForm from './SignupForm';


export default function Signup({
  closeModal,
  onKeyDown,
  onMount,
  onUnmount
}) {
  return (
    <ModalContent
      title="Create An Account"
      closeModal={closeModal}
      onKeyDown={onKeyDown}
      onMount={onMount}
      onUnmount={onUnmount}
    >
      <SignupForm />
    </ModalContent>
  );
}

Signup.propTypes = {
  closeModal: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onMount: PropTypes.func.isRequired,
  onUnmount: PropTypes.func.isRequired
};
