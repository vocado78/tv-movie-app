import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import authReducer from './authReducer';
import dropdownReducer from './dropdownReducer';


export default combineReducers({
  modal: modalReducer,
  auth: authReducer,
  dropdowns: dropdownReducer
});
