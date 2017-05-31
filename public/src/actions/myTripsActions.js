/* eslint-disable */

import * as types from './actionTypes';
import store from '../store/store';

const getUserTrips = ()=>{
  fetch('/mytrip',{
    method: 'POST',
    headers: {
           'Accept': 'application/json, text/plain, */*',
           'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
  .then((response)=>{
    return  response.json();
  }).then((response)=>{
    console.log('response.tripMembers',response);
      store.dispatch({type: types.GET_USER_TRIPS, payload: response});
  }).catch((error) => {
    store.dispatch({
      type: types.GET_USER_TRIPS_FAILURE
    })
  })
}

const UpdateUserTrips = (data)=>{
  fetch('/trip',{
    method: 'PUT',
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
      store.dispatch({type: types.UPDATE_USER_TRIPS, payload: response});
  }).catch((error) => {
    store.dispatch({
      type: types.UPDATE_USER_TRIPS_FAILURE
    })
  })
}


const UnjoinTrip = (tripId)=>{
  console.log('tripId: ',tripId);
  console.log('tripId: ',tripId);
  fetch('/trip',{
    method: 'DELETE',
    headers: {
           'Accept': 'application/json, text/plain, */*',
           'Content-Type': 'application/json'
    },
    body:JSON.stringify(tripId),
    credentials: 'include'
  })
  .then((response)=>{
    return  response.json();
  }).then((response)=>{
      store.dispatch({type: types.UNJOIN_TRIP, payload: response});
  }).catch((error) => {
    store.dispatch({
      type: types.UNJOIN_TRIP_FAILURE
    })
  })
}

export {getUserTrips,UpdateUserTrips,UnjoinTrip};
