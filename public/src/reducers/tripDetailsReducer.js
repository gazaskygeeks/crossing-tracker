import * as types from '../actions/actionTypes';
import initialState from './initialState';

function tripDetailsReducer(state = initialState.tripDetails, action) {
  switch (action.type) {
  case types.TRIP_DETAILS:
    return action.payload;
  case types.TRIP_DETAILS_FAILURE:
    return state;
  default:
    return state;
  }
}

export {
  tripDetailsReducer
};
