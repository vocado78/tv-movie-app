import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../Button/Button';
import ResetPasswordLink from '../ResetPassword/ResetPasswordLink';
import MODAL_IDS from '../../../constants/modalIds';
import LABELS from '../../../constants/buttonLabels';


const AuthFormBottom = ({ hideModal, showModal, modalId }) => {
  const labelPrimary = modalId === MODAL_IDS.LOG_IN ? LABELS.LOG_IN : LABELS.CREATE_ACCOUNT;
  const labelSecondary = modalId === MODAL_IDS.LOG_IN ? LABELS.CREATE_ACCOUNT : LABELS.LOG_IN;
  const modalToShow = modalId === MODAL_IDS.LOG_IN ? MODAL_IDS.SIGN_UP : MODAL_IDS.LOG_IN;

  return (
    <div className="" data-testid="auth-form-bottom">
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
