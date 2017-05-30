import * as types from '../actions/actionTypes';
import initialState from './initialState';

function joinApproveReducer(state = initialState.approveJoin, action) {
  switch (action.type) {
  case types.APPROVE_JOIN:
    return action.payload;
  case types.APPROVE_JOIN_FAILURE:
    return state;
  default:
    return state;
  }
}
export {
  joinApproveReducer
};
