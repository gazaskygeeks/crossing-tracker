import { signupReducer } from '../public/src/reducers/signupReducer.js'
import * as types from '../public/src/actions/actionTypes.js';
var initialState = {};
const payload1 = {
  msg: 'User already registered',
  statusCode:409
}
const payload2 = {
  statusCode:409
}
test('REGISTER_USER : should return the data that fetched',()=>{
  expect(signupReducer(initialState,{type: types.REGISTER_USER,
    payload: payload1})).toEqual(payload1)
})
test('REGISTER_USER : should delete that user ',()=>{
  initialState = [payload1,payload2]
  expect(signupReducer(initialState,{type: types.REGISTER_USER,
    payload: payload2})).toEqual(payload2)
})
test('REGISTER_USER_FAIL: should return the initialState ',()=>{
  expect(signupReducer(initialState,{type: types.REGISTER_USER_FAIL,
    payload: initialState})).toEqual(initialState)
})
