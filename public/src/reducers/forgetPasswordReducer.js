import * as types from '../actions/actionTypes';
import initialState from './initialState';

function forgetPasswordReducer(state = initialState.forgetPassword, action) {
  switch (action.type) {
  case types.FORGET_PASSWORD:
    return action.payload;
  case types.FORGET_PASSWORD_FAIL:
    return state;
  default:
    return state;
  }
}

export {
  forgetPasswordReducer
};
