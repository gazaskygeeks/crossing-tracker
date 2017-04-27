import * as types from '../actions/actionTypes';
import initialState from './initialState';

function signinReducer(state = initialState.signin, action) {
  switch (action.type) {
  case types.POST_SIGNIN_DATA:
    return action.payload;
  case types.POST_SIGNIN_FAIL:
    return state;
  default:
    return state;
  }
}

export {
  signinReducer
};
