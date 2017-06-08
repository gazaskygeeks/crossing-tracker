import * as types from '../actions/actionTypes';
import initialState from './initialState';

function UserTypeReducer(state = initialState.userType, action) {
  switch (action.type) {
  case types.GET_USER_TYPE:
    return action.payload;
  case types.GET_USER_TYPE_FAILURE:
    return state;
  default:
    return state;
  }
}
export {
  UserTypeReducer
};
