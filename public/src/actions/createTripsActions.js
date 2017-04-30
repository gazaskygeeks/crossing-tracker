/* eslint-disable */

import * as types from './actionTypes';
import store from '../store/store';

const createTrip = (data)=>{
  console.log("data: ",data);
  fetch('/createtrip',{
    method: 'POST',
    body:JSON.stringify(data)
  })
  .then((response)=>{
    console.log('response: ',response);
    return  response.json();
  }).then((response)=>{
    console.log('response: ',response);
      store.dispatch({type: types.CREATE_TRIP, payload: response});
  }).catch((err) => {
    console.log('err: ',err);
    store.dispatch({
      type: types.CREATE_TRIP_FAILURE
    })
  })
}

export default createTrip;
