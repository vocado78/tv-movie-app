import { SHOW_MODAL, HIDE_MODAL } from '../actions/types';

const initialState = '';

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return action.payload;
    case HIDE_MODAL:
      return '';
    default:
      return state;
  }
};

export default modalReducer;
