import * as types from '../actions/actionTypes';
import initialState from './initialState';

function createTripReducer(state = initialState.createTrip, action) {
  switch (action.type) {
  case types.CREATE_TRIP:
    return action.payload;
  case types.CREATE_TRIP_FAILURE:
    return state;
  default:
    return state;
  }
}
export {
  createTripReducer
};
