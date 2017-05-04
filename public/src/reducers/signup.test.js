import { signupReducer } from './signupReducer.js'
import * as types from '../actions/actionTypes.js';
var initialState = [];
const payload1 = {
  username : 'jestJest',
  email : 'jest@jest.com',
  password : '123654789',
  phone : '123654789',
  org_id : '1'
}
const payload2 = {
  username : '2jestJest',
  email : '2jest@jest.com',
  password : '123654789',
  phone : '123654789',
  org_id : '2'
}
test('REGISTER_USER : should return the data that fetched',()=>{
  expect(signupReducer(initialState,{type: types.REGISTER_USER,
    payload: [payload1]})).toEqual([payload1])
})
test('ACCEPT_OR_REJECT_USER : should delete that user ',()=>{
  initialState = [payload1,payload2]
  expect(signupReducer(initialState,{type: types.ACCEPT_OR_REJECT_USER,
    payload: [payload1,payload2]})).toEqual([payload1,payload2])
})
test('REGISTER_USER_FAIL: should return the initialState ',()=>{
  expect(signupReducer(initialState,{type: types.REGISTER_USER_FAIL,
    payload: initialState})).toEqual(initialState)
})
