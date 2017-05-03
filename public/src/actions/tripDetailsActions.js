/* eslint-disable */

import * as types from './actionTypes';
import store from '../store/store';

const viewTrip = (id)=>{
  fetch(`/tripdetails/${id}`,{
    method: 'POST',
    body:JSON.stringify(id),
    credentials: 'include'
  })
  .then((response)=>{
    return  response.json();
  }).then((response)=>{
      store.dispatch({type: types.TRIP_DETAILS, payload: response});
  }).catch((err) => {
    store.dispatch({
      type: types.TRIP_DETAILS_FAILURE
    })
  })
}

export default viewTrip;
