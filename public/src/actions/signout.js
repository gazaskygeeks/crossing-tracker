/* eslint-disable */
import { browserHistory } from 'react-router';

const signout = (data)=>{
  fetch('/signout',{
    method: 'POST',
    body:"",
    credentials: 'include'
  })
  .then((response)=>{
    browserHistory.push('/');

  }).catch((err) => {
  throw err
  })
}

export default signout;
