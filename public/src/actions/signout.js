/* eslint-disable */
import { hashHistory } from 'react-router';

const signout = (data)=>{
  fetch('/signout',{
    method: 'POST',
    body:"",
    credentials: 'include'
  })
  .then((response)=>{
    window.location.replace('/');
  }).catch((err) => {
  throw err
  })
}

export default signout;
