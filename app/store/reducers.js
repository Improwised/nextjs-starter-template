import initialState from './state';
import { actionTypes } from './actions';

// REDUCERS
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COUNTRIES:
      return { ...state, countries: action.countries };
    default:
      return state;
  }
};

export default reducer;
