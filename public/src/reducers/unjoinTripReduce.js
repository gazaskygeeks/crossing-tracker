import * as types from '../actions/actionTypes';
import initialState from './initialState';

function unjoinTripReducer(state = initialState.unjoinTrip, action) {
  switch (action.type) {
  case types.UNJOIN_TRIP:
    return action.payload;
  case types.UNJOIN_TRIP_FAILURE:
    return state;
  default:
    return state;
  }
}
export {
  unjoinTripReducer
};
