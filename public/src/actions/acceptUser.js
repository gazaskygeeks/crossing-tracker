/* eslint-disable */
import * as types from './actionTypes';
import store from '../store/store';
const accept = (data)=>{
  fetch('/user',{
    method: 'POST',
    headers: {
           'Accept': 'application/json, text/plain, */*',
           'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    credentials: 'include'
  })
  .then((response)=>{
    return  response.json()
  })
.then((response)=>{
  if(response.statusCode === 200 && response.message === 'accept registration'){
    store.dispatch({type: types.GET_DISAPPROVED_USERS, payload: response.result});
  }
}).catch((error) =>{
  store.dispatch({type: types.REGISTER_USER_FAIL})
})}


export default accept;
