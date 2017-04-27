/* eslint-disable */
import * as types from './actionTypes';
import {
  store
} from '../store/store';
const createTrip = (data) => {
  fetch('/createtirp', {
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then((res) => {
    return res.json()
  })
  .then((response) => {
    store.dispatch({
      type: types.CREATE_TRIP,
      payload: response
    });
  }).catch((err) => {
    store.dispatch({
      type: types.CREATE_TRIP_FAILURE
    })
  })
}

export default createTrip;
