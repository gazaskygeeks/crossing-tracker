import { disApprovedUsers } from '../public/src/reducers/getDisApprovedUsers.js'
import * as types from '../public/src/actions/actionTypes.js';
var initialState = [];
const payload1 = {
  username : 'jestJest',
  email : 'jest@jest.com',
  phone : '123654789',
  org :  'mercy'
}
const payload2 = {
  username : '2jestJest',
  email : '2jest@jest.com',
  phone : '123654789',
  org_id : 'gaza sky geeks'
}
test('GET_DISAPPROVED_USERS : should return the payload',()=>{
  expect(disApprovedUsers(initialState,{type: types.GET_DISAPPROVED_USERS,
    payload: [payload1]})).toEqual([payload1])
})
test('GET_DISAPPROVED_USERS : should return the payload  ',()=>{
  initialState = [payload1,payload2]
  expect(disApprovedUsers(initialState,{type: types.GET_DISAPPROVED_USERS,
    payload: [payload1,payload2]})).toEqual([payload1,payload2])
})
test('GET_DISAPPROVED_USERS_FAIL: should return the initialState ',()=>{
  expect(disApprovedUsers(initialState,{type: types.GET_DISAPPROVED_USERS_FAIL,
    payload: initialState})).toEqual(initialState)
})
