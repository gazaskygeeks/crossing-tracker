import * as types from '../actions/actionTypes';
import initialState from './initialState';

function getOrgsReducer(state = initialState.getOrgs, action) {
  switch (action.type) {
  case types.FETCH_ORGS_SUCCESS:
    return action.payload;
  case types.FETCH_ORGS_FAILURE:
    return state;
  default:
    return state;
  }
}
export {
  getOrgsReducer
};
