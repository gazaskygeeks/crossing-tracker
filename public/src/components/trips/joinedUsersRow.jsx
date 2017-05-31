import React from 'react';

const JoinedUsersRow = ({joinedUsers, approveJoin}) => {
  if(!joinedUsers || !approveJoin){
    return <div>Loading...</div>;
  }
  const users = joinedUsers.map((user)=>{
    console.log('user: ',user);
    if(user != null){
      const accept = {
        trip_id: user.trip_id,
        userJoinnedId: user.user_id,
        memberStatus: 1
      };
      const reject = {
        trip_id: user.trip_id,
        userJoinnedId: user.user_id,
        memberStatus: -1
      };
      return(
          <tr>
            <td>{user.date}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.org_name}</td>
            <td>
              <button
                type="button"
                className="btn btn-success"
                onClick = {() => approveJoin(accept)}
                >
                Accept
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick = {() => approveJoin(reject)}
                >
                Reject
              </button>
            </td>
          </tr>
      );
    }
  });
  return (
    <section className='joined-users'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-offset-2 col-md-8'>
            <h3 className='heading'>Awaiting passengers</h3>
            <table className='table'>
              <thead>
                <tr>
                  <th>Trip Date</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Phone no.</th>
                  <th>Organization</th>
                  <th>Accept/Reject User</th>
                </tr>
              </thead>
              <tbody>
                {users}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )

}

export default JoinedUsersRow;
