import * as types from '../actions/actionTypes';
import initialState from './initialState';

function getAllTripsReducer(state = initialState.allTrips, action) {
  switch (action.type) {
  case types.DISPLAY_TRIPS:
    return action.payload;
  case types.DISPLAY_TRIPS_FAILURE:
    return state;
  default:
    return state;
  }
}

export {
  getAllTripsReducer
};
