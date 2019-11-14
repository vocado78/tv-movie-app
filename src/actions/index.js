import { SHOW_MODAL, HIDE_MODAL } from './types';

export const showModal = (modalId) => {
  return {
    type: SHOW_MODAL,
    payload: modalId
  };
};

export const hideModal = () => {
  return {
    type: HIDE_MODAL
  };
};
