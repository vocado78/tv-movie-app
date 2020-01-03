import { ACTIVE_DECADE, ACTIVE_GENRE, ACTIVE_SORT } from '../actions/types';

const initialState = {
  activeGenre: '',
  activeDecade: '',
  activeSort: ''
};

const dropdownReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_DECADE:
      return { ...state, activeDecade: action.payload };
    case ACTIVE_GENRE:
      return { ...state, activeGenre: action.payload };
    case ACTIVE_SORT:
      return { ...state, activeSort: action.payload };
    default:
      return state;
  }
};

export default dropdownReducer;
