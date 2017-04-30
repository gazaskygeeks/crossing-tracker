import * as types from '../actions/actionTypes';
import initialState from './initialState';

function homeTripsReducer(state = initialState.homeTrips, action) {
  switch (action.type) {
  case types.DISPLAY_ALL_TRIPS:
    return action.payload;
  case types.DISPLAY_ALL_TRIPS_FAILURE:
    return state;
  default:
    return state;
  }
}

export {
  homeTripsReducer
};
