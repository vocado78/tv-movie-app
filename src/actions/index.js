import { SHOW_MODAL, HIDE_MODAL, AUTH_USER } from './types';

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

export const setAuthUser = (authUser) => {
  return {
    type: AUTH_USER,
    payload: authUser
  };
};
