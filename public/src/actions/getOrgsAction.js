 /* eslint-disable */

import * as types from './actionTypes';
import store from '../store/store';

const getOrgs = () => {

  fetch('/organizations', {
      method: 'GET',
      credentials: 'include'
    })
    .then(res => res.json())
    .then((response) => {
        store.dispatch({type: types.FETCH_ORGS_SUCCESS, payload: response});
    }).catch((error) => {
      store.dispatch({
        type: types.FETCH_ORGS_FAILURE
      })
    })

};

export default getOrgs;
