import { AUTH_USER } from '../actions/types';

const initialState = null;

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return action.payload;
    default:
      return state;
  }
};

export default authReducer;
