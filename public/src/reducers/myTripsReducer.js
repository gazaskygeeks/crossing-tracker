import * as types from '../actions/actionTypes';
import initialState from './initialState';

function userTripsReducer(state = initialState.getUserTrips, action) {
  switch (action.type) {
  case types.CANCEL_TRIP:
    return action.payload;
  case types.CANCEL_TRIP_FAILURE:
    return state;
  case types.GET_USER_TRIPS:
    return action.payload;
  case types.GET_USER_TRIPS_FAILURE:
    return state;
  default:
    return state;
  }
}
export {
  userTripsReducer
};
