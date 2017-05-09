import * as types from '../actions/actionTypes';
import initialState from './initialState';

function joinTripReducer(state = initialState.joinTrip, action) {
  switch (action.type) {
  case types.JOIN_TRIP:
    return action.payload;
  case types.JOIN_TRIP_FAILURE:
    return state;
  default:
    return state;
  }
}

export {
  joinTripReducer
};
