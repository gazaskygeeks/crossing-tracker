/* eslint-disable */
import * as types from './actionTypes';
import store from '../store/store';
const register = (data)=>{
  fetch('/signup',{
    method: 'POST',
    body:JSON.stringify(data)
  })
  .then((response)=>{
    return  response.json()
  })
.then((response)=>{
  store.dispatch({type: types.REGISTER_USER, payload: response});
  browserHistory.push('/home');
}).catch((err) =>{
  store.dispatch({type: types.REGISTER_USER_FAIL})
})}

export default register;
