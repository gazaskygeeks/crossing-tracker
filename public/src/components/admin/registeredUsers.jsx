import React from 'react'
const RegestratedList = (props) => {
  const list = props.regList.map(function(item) {
    return (
      <tr>
        <td>{item.Username}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.org}</td>
          <td>
            <button 
            type="button" className="btn btn-success"
            name="button">Accept</button>
          <button
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
