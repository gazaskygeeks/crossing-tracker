/* eslint-disable */
import * as types from './actionTypes.js'
import store from '../store/store.js'
const search = (data) => {
fetch('/search',{
  method: 'POST',
  headers: {
         'Accept': 'application/json, text/plain, */*',
         'Content-Type': 'application/json'
  },
  body: JSON.stringify(data),
  credentials: 'include'
})
.then((response)=>{
  return response.json()
})
.then((response)=>{
    store.dispatch({type: types.DISPLAY_TRIPS, payload: response.filter});
    store.dispatch({type: types.DISPLAY_ALL_TRIPS, payload: response.details});
  }).catch((error) => {
    store.dispatch({type: types.DISPLAY_TRIPS_FAILURE})
   store.dispatch({type: types.DISPLAY_ALL_TRIPS_FAILURE})
  })

}
export default search;
