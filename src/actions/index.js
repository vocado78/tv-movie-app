import {
  SHOW_MODAL,
  HIDE_MODAL,
  AUTH_USER,
  ACTIVE_DECADE,
  ACTIVE_GENRE,
  ACTIVE_SORT,
  CLEAR_DROPDOWNS
} from './types';

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

export const setActiveGenre = (genre) => {
  return {
    type: ACTIVE_GENRE,
    payload: genre
  };
};

export const setActiveDecade = (decade) => {
  return {
    type: ACTIVE_DECADE,
    payload: decade
  };
};

export const clearActiveDropdowns = () => {
  return {
    type: CLEAR_DROPDOWNS
  };
};

export const setActiveSort = (type) => {
  return {
    type: ACTIVE_SORT,
    payload: type
  };
};
