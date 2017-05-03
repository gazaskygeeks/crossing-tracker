/* eslint-disable */
import { hashHistory } from 'react-router';

const signout = (data)=>{
  fetch('/signout',{
    method: 'POST',
    body:"",
    credentials: 'include'
  })
  .then((response)=>{
    hashHistory.push('/');

  }).catch((err) => {
  throw err
  })
}

export default signout;
