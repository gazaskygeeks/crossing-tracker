import * as types from './actionTypes';
import store from '../store/store';

const acceptUser = (data)=>{
  console.log('data acceptUser:',data);
  fetch('/acceptuser',{
    method: 'POST',
    body:JSON.stringify(data),
    credentials: 'include'
  })
  .then((response)=>{
    return  response.json();
  }).then((response)=>{
    if(response.statusCode === 200 && response.message === 'confirmation success'){
      store.dispatch({type: types.ACCEPT_OR_REJECT_USER, payload: data});
    }else{
      console.log('response.message:',response.message);
      console.log('response.statusCode:',response.statusCode);
    }
  }).catch((err) => {
    store.dispatch({
      type: types.CREATE_TRIP_FAILURE
    })
  })
}

export default acceptUser;
