import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import { ResetPasswordLink } from './ResetPassword';
import { MODAL_IDS } from '../Modal';

const LABELS = {
  LOG_IN: 'Log In',
  SIGN_UP: 'Create Account'
};

const AuthFormBottom = ({ hideModal, showModal, modalId }) => {
  const labelPrimary = modalId === MODAL_IDS.LOG_IN ? LABELS.LOG_IN : LABELS.SIGN_UP;
  const labelSecondary = modalId === MODAL_IDS.LOG_IN ? LABELS.SIGN_UP : LABELS.LOG_IN;
  const modalToShow = modalId === MODAL_IDS.LOG_IN ? MODAL_IDS.SIGN_UP : MODAL_IDS.LOG_IN;

  return (
    <div className="">
      {modalId === MODAL_IDS.LOG_IN && <ResetPasswordLink onClick={hideModal} />}
      <Button type="submit" className="btn btn-primary" label={labelPrimary} />
      <Button type="button" className="btn btn-secondary" onClick={() => showModal(modalToShow)} label={labelSecondary} />
    </div>
  );
};

export default AuthFormBottom;

AuthFormBottom.defaultProps = {
  hideModal: () => {}
};

AuthFormBottom.propTypes = {
  hideModal: PropTypes.func,
  showModal: PropTypes.func.isRequired,
  modalId: PropTypes.string.isRequired
};
