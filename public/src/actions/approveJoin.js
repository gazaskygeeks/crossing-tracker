/* eslint-disable */

import * as types from './actionTypes';
import store from '../store/store';

const createTrip = (data)=>{
  fetch('/approve',{
    method: 'POST',
    headers: {
           'Accept': 'application/json, text/plain, */*',
           'Content-Type': 'application/json'
    },
    body:JSON.stringify(data),
    credentials: 'include'
  })
  .then((response)=>{
    return  response.json();
  }).then((response)=>{
      store.dispatch({type: types.APPROVE_JOIN, payload: response});
  }).catch((error) => {
    store.dispatch({
      type: types.APPROVE_JOIN_FAILURE
    })
  })
}

export default createTrip;
