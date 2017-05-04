import * as types from '../actions/actionTypes';
import initialState from './initialState';

function geLocationsReducer(state = initialState.getLocations, action) {
  switch (action.type) {
  case types.FETCH_LOCATIONS_SUCCESS:
    return action.payload;
  case types.FETCH_LOCATIONS_FAILURE:
    return state;
  default:
    return state;
  }
}
export {
  geLocationsReducer
};
