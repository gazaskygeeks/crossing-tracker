import * as types from '../actions/actionTypes';
import initialState from './initialState';

function signupReducer(state = initialState.signup, action) {

  switch (action.type) {
  case types.REGISTER_USER:
    return action.payload;
  case types.ACCEPT_OR_REJECT_USER:
    return state.filter(item =>
      item.email != action.payload
    )
  case types.REGISTER_USER_FAIL:
    return state;
  default:
    return state;
  }
}

export {
  signupReducer
};
