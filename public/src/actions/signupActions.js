/* eslint-disable */
import * as types from './actionTypes';
import store from '../store/store';
import { browserHistory } from 'react-router';

const register = (data)=>{
  fetch('/signup',{
    method: 'POST',
    body:JSON.stringify(data),
    credentials: 'include'
  })
  .then((response)=>{
    return  response.json()
  })
.then((response)=>{
  console.log('res in sign up:',response);
  // browserHistory.push('/home');
  // browserHistory.push('/success');
}).catch((err) =>{
  store.dispatch({type: types.REGISTER_USER_FAIL})
})}

export default register;
