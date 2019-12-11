import { combineReducers } from 'redux';
import { SHOW_MODAL, HIDE_MODAL, AUTH_USER } from '../actions/types';


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

const authReducer = (state = null, action) => {
  switch (action.type) {
    case AUTH_USER:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  modal: modalReducer,
  auth: authReducer
});
