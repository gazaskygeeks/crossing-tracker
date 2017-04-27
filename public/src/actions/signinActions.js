/* eslint-disable */
import * as types from './actionTypes';
import store from '../store/store';
const login = (data)=>{
  fetch('/login',{
    method: 'POST',
    body:JSON.stringify(data)
  })
  .then((response)=>{
    return  response.json()
  })
.then((response)=>{
  store.dispatch({type: types.POST_SIGNIN_DATA, payload: response});
}).catch((err) =>{
  store.dispatch({type: types.POST_SIGNIN_FAIL})
})}

export default login;
