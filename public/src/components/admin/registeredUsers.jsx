import React from 'react'
const RegestratedList = (props) => {
  console.log('props in registeredUsers:',props);
  const list = props.regList.map(function(item) {
    return (
      <tr>
        <td>{item.username}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.org_id}</td>
          <td>
            <button onClick={() => props.onAccept({email:item.email})}
            type="button" className="btn btn-success"
            name="button">Accept</button>
          <button onClick={() => props.onReject({email:item.email})}
            type="button" className="btn btn-danger"
            name="button">Reject</button>
          </td>
      </tr>
    )
  })
  return (
        <tbody>
            {list}
        </tbody>
  )
}
export default RegestratedList;
