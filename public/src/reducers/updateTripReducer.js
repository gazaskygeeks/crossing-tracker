import * as types from '../actions/actionTypes';
import initialState from './initialState';

function updateTripsReducer(state = initialState.updateTrip, action) {
  switch (action.type) {
  case types.UPDATE_USER_TRIPS:
    return action.payload;
  case types.UPDATE_USER_TRIPS_FAILURE:
    return state;
  default:
    return state;
  }
}
export {
  updateTripsReducer
};
