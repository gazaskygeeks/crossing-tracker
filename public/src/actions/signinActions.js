/* eslint-disable */
import * as types from './actionTypes';
import store from '../store/store';
import { hashHistory } from 'react-router';
const login = (data)=>{
  fetch('/login',{
    method: 'POST',
    body:JSON.stringify(data),
    credentials: 'include'
  })
  .then((response)=>{
    return  response.json()
  }).then((response)=>{
    store.dispatch({type: types.POST_SIGNIN_DATA, payload: response})
    if(response.statusCode === 200){
      hashHistory.push('home');
    }else{
      store.dispatch({type: types.POST_SIGNIN_FAIL})
    }
  })
}

export default login;
