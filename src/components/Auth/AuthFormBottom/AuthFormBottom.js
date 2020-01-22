import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../Button/Button';
import MODAL_IDS from '../../../constants/modalIds';
import LABELS from '../../../constants/buttonLabels';


const AuthFormBottom = ({ showModal, modalId }) => {
  const labelPrimary = modalId === MODAL_IDS.LOG_IN ? LABELS.LOG_IN : LABELS.CREATE_ACCOUNT;
  const labelSecondary = modalId === MODAL_IDS.LOG_IN ? LABELS.CREATE_ACCOUNT : LABELS.LOG_IN;
  const modalToShow = modalId === MODAL_IDS.LOG_IN ? MODAL_IDS.SIGN_UP : MODAL_IDS.LOG_IN;

  return (
    <div className="flex justify-between mt-10" data-testid="auth-form-bottom">
      <Button type="submit" className="btn btn-primary py-1 px-3 text-sm font-medium" label={labelPrimary} />
      <Button type="button" className="btn outline-none text-gray-400 hover:text-white py-1 px-3 text-sm font-medium" onClick={() => showModal(modalToShow)} label={labelSecondary} />
    </div>
  );
};

export default AuthFormBottom;

AuthFormBottom.propTypes = {
  showModal: PropTypes.func.isRequired,
  modalId: PropTypes.string.isRequired
};
