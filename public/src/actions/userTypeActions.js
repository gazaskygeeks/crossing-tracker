
/* eslint-disable */
import * as types from './actionTypes';
import store from '../store/store';

const UserType = ()=>{
  fetch('/userType',{
    method: 'GET',
    headers: {
           'Accept': 'application/json, text/plain, */*',
           'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
  .then((response)=>{
    return  response.json()
  })
  .then((response)=>{
    store.dispatch({type: types.GET_USER_TYPE, payload: response});
  }).catch((error) =>{
    store.dispatch({type: types.GET_USER_TYPE_FAILURE})
  })
}


export default UserType;
