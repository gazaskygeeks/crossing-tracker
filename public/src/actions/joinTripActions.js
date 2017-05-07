/* eslint-disable */

import * as types from './actionTypes';
import store from '../store/store';

const joinTrip = (id)=>{
  console.log('jointrip id: ',id);
  fetch('/jointrip',{
    method: 'POST',
    body:JSON.stringify(id),
    credentials: 'include'
  })
  .then((response)=>{
    return  response.json();
  }).then((response)=>{
    console.log('join response: ',response);
      store.dispatch({type: types.JOIN_TRIP, payload: response});
  }).catch((err) => {
    store.dispatch({
      type: types.JOIN_TRIP_FAILURE
    })
  })
}

export default joinTrip;
