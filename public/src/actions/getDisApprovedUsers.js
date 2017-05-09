/* eslint-disable */
import * as types from './actionTypes';
import store from '../store/store';
const disApproved = ()=>{
  fetch('/disApproved',{
    method: 'GET',
    credentials: 'include'
  })
  .then((response)=>{
    return  response.json()
  })
.then((response)=>{
  console.log('response in GET_DISAPPROVED_USERS fetch:',response.result);
  if(response.statusCode === 200){
    store.dispatch({type: types.GET_DISAPPROVED_USERS, payload: response.result});
  }
  }).catch((error) =>{
  store.dispatch({type: types.GET_DISAPPROVED_USERS_FAUILR})
})}

export default disApproved;
