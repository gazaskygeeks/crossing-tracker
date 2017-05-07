/* eslint-disable */

import * as types from './actionTypes';
import store from '../store/store';

const getLocations = () => {
  fetch('/locations', {
      method: 'GET',
      credentials: 'include'
    })
    .then(res => res.json())
    .then((response) => {
      store.dispatch({
        type: types.FETCH_LOCATIONS_SUCCESS,
        payload: response
      });
    }).catch((err) => {
      store.dispatch({
        type: types.FETCH_LOCATIONS_FAILURE
      })
    })

};

export default getLocations;
