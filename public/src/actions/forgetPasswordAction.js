/* eslint-disable */
import * as types from './actionTypes';
import store from '../store/store';
const forgetPassword = (data) =>{
  console.log('data in action:',data);
  fetch('/forget',{
    method: 'POST',
    headers: {
           'Accept': 'application/json, text/plain, */*',
           'Content-Type': 'application/json'
    },
    body:JSON.stringify(data),
    credentials: 'include'
  })
  .then((response) =>{
    return  response.json()
  })
  .then((response) => {
    console.log('response',response);
    store.dispatch({type: types.FORGET_PASSWORD, payload: response })
  })
}
export default forgetPassword
