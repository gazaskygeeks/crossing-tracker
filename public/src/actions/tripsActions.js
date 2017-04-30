/* eslint-disable */
import * as types from './actionTypes';
import store from '../store/store';
const getHomeTrips = (data)=>{
  fetch('/trips',{
    method: 'POST',
    body:data,
    credentials: 'include'
  })
  .then((response)=>{
    return  response.json()
  }).then((response)=>{
    console.log('respnse of get trips:',response);
      store.dispatch({type: types.DISPLAY_ALL_TRIPS, payload: response});
    }).catch((err) => {
      store.dispatch({type: types.DISPLAY_ALL_TRIPS_FAILURE})
    })
  }


export default getHomeTrips;
