/* eslint-disable */
import * as types from './actionTypes';
import store from '../store/store';
const homeTrips = (data)=>{
  fetch('/trips',{
    method: 'POST',
    body:data,
    credentials: 'include'
  })
  .then((response)=>{
    return  response.json()
  }).then((response)=>{
      store.dispatch({type: types.DISPLAY_ALL_TRIPS, payload: response});
    }).catch((error) => {
      store.dispatch({type: types.DISPLAY_ALL_TRIPS_FAILURE})
    })
  }


export default homeTrips;
