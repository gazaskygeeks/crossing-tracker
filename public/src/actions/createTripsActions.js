/* eslint-disable */

import * as types from './actionTypes';
import store from '../store/store';

const createTrip = (data)=>{
  fetch('/createtrip',{
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
      store.dispatch({type: types.CREATE_TRIP, payload: response});
  }).catch((error) => {
    store.dispatch({
      type: types.CREATE_TRIP_FAILURE
    })
  })
}

export default createTrip;
