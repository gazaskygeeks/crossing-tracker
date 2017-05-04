/* eslint-disable */

import * as types from './actionTypes';
import store from '../store/store';

const getOrgs = ()=> {
    fetch('/orgs',{method:'GET'})
    .then(res => res.json())
    .then((response) => {
        store.dispatch({type: types.FETCH_ORGS_SUCCESS, payload: response});
    }).catch((err) => {
      store.dispatch({type: types.FETCH_ORGS_FAILURE})
    })

};

export default getOrgs;
