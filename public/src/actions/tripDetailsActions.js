/* eslint-disable */

import * as types from './actionTypes';
import store from '../store/store';

const viewTrip = (id)=>{
  fetch(`/tripdetails/${id}`,{
    method: 'POST',
    body:JSON.stringify(id),
    headers: {
           'Accept': 'application/json, text/plain, */*',
           'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
  .then((response)=>{
    return  response.json();
  }).then((response)=>{
      store.dispatch({type: types.TRIP_DETAILS, payload: response});
  }).catch((error) => {
    store.dispatch({
      type: types.TRIP_DETAILS_FAILURE
    })
  })
}


export default viewTrip;
