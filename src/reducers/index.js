import { combineReducers } from 'redux';
import { SHOW_MODAL, HIDE_MODAL } from '../actions/types';

// const INITIAL_STATE = {
//   modal: null
// };

const modalReducer = (state = null, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return action.payload;
    case HIDE_MODAL:
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  modal: modalReducer
});
