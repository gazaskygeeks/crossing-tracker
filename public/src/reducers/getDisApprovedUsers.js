import * as types from '../actions/actionTypes';
import initialState from './initialState';

function disApprovedUsers(state = initialState.disApproved, action) {
  switch (action.type) {
  case types.GET_DISAPPROVED_USERS:
    return action.payload;
  case types.GET_DISAPPROVED_USERS_FAILURE:
    return state;
  default:
    return state;
  }
}
export {
  disApprovedUsers
};
