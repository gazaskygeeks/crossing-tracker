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
    payload: payload1})).toEqual([payload1])
})
test('REGISTER_USER with another payload: should return the data that fetched',()=>{
  initialState = [payload1]
  expect(signupReducer(initialState,{type: types.REGISTER_USER,
    payload: payload2})).toEqual([payload1,payload2])
})
test('ACCEPT_OR_REJECT_USER : should delete that user ',()=>{
  initialState = [payload1,payload2]
  expect(signupReducer(initialState,{type: types.ACCEPT_OR_REJECT_USER,
    payload: payload1.email})).toEqual([payload2])
})
test('REGISTER_USER_FAIL: should return the initialState ',()=>{
  expect(signupReducer(initialState,{type: types.REGISTER_USER_FAIL,
    payload: payload1.email})).toEqual(initialState)
})














// test('ACCEPT_OR_REJECT_USER : should remove that user from state',()=>{
//   expect(signupReducer(initialState,{type: types.ACCEPT_OR_REJECT_USER, payload: payload.email})).toEqual([])
//   console.log('initialState aftre reject:',initialState);
// })
// test('REGISTER_USER_FAIL : should return the initialState',()=>{
//   expect(signupReducer(initialState,{type: types.REGISTER_USER_FAIL, payload: payload})).toEqual(initialState)
// })
