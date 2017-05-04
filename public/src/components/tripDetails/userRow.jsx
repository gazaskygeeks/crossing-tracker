import React from 'react'

const UserRow = ({user}) => {
  // debugger;
  if(!user){
    return <div>Loading...</div>;
  }
  return (
    <tbody>
      <tr>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
      </tr>
    </tbody>
  )

}




export default UserRow;
