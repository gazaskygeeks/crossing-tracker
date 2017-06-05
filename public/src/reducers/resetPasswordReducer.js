import * as types from '../actions/actionTypes';
import initialState from './initialState';

function resetPasswordReducer(state = initialState.resetPassword, action) {
  switch (action.type) {
  case types.RESET_PASSWORD:
    return action.payload;
  case types.RESET_PASSWORD_FAIL:
    return state;
  default:
    return state;
  }
}

export {
  resetPasswordReducer
};
