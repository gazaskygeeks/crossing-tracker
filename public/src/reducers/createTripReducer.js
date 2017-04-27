import * as types from '../actions/actionTypes';
import initialState from './initialState';

function createTripReducer(state = initialState.createTrip, action) {
  switch (action.type) {
  case types.CREATE_TRIP:
    return state
  default:
    return state
  }
}
export {
  createTripReducer
};
