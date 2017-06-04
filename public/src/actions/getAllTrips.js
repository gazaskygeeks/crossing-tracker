/* eslint-disable */
import * as types from './actionTypes';
import store from '../store/store';
const allTrips = ()=>{
  fetch('/allTrips',{
    method: 'GET',
    credentials: 'include'
  })
  .then((response)=>{
    return  response.json()
  }).then((response)=>{
      store.dispatch({type: types.DISPLAY_TRIPS, payload: response});
    }).catch((error) => {
      store.dispatch({type: types.DISPLAY_TRIPS_FAILURE})
    })
  }


export default allTrips;
