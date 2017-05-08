  /* eslint-disable */
import * as types from './actionTypes';
import store from '../store/store';
import { hashHistory } from 'react-router';
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
    if(response.statusCode === 200 && response.msg === 'User regestered'){
    hashHistory.push('success');
  }else if(response.statusCode === 409 && response.msg === 'User already registered'){
    alert(response.msg)
  }else{
    alert('invalid data ')
  }
}).catch((error) =>{
  store.dispatch({type: types.REGISTER_USER_FAIL})
})}

export default register;
