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
       store.dispatch({type: types.REGISTER_USER, payload: response})
    hashHistory.push('success');
  }else{
    store.dispatch({type: types.REGISTER_USER, payload: response})
  }
}).catch((error) =>{
  store.dispatch({type: types.REGISTER_USER_FAIL})
})}

export default register;
