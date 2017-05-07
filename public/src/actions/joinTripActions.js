/* eslint-disable */

import * as types from './actionTypes';
import store from '../store/store';

const joinTrip = (id)=>{
  fetch('/jointrip',{
    method: 'POST',
    headers: {
           'Accept': 'application/json, text/plain, */*',
           'Content-Type': 'application/json'
    },
    body:JSON.stringify(id),
    credentials: 'include'
  })
  .then((response)=>{
    return  response.json();
  }).then((response)=>{
      store.dispatch({type: types.JOIN_TRIP, payload: response});
  }).catch((err) => {
    store.dispatch({
      type: types.JOIN_TRIP_FAILURE
    })
  })
}

export default joinTrip;
