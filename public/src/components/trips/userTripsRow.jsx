import React from 'react';
import { hashHistory } from 'react-router';
import moment from 'moment';

const UserTripsRow = (
  {
    userTrips,
    messageChange,
    delMessage,
    CancelTripp,
    msg,
    joinedUsers,
    approveJoin,
    getUserTrips
  }
) => {
  let disabled;
  if(!userTrips){
    return <div>Loading...</div>;
  }
  const arr = userTrips.sort(function(a,b){
    return new Date(b.date) - new Date(a.date);
  });
  if(delMessage.length === 0){
    disabled = 'disabled';
  }else if(delMessage.length > 0){
    disabled = '';
  }

  const trips = arr.map((trip)=>{
    const users = joinedUsers.map((user)=>{
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
        if(trip.trip_id  === user.trip_id && user.user_approved === 0){
          return(
              <tr key={user.user_id+user.trip_id}>
                <td>{user.date}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.org_name}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick = {
                      () => {
                        return (
                          approveJoin(accept),
                          getUserTrips()
                        );
                      }
                    }
                    >
                    Accept
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick = {
                      () => {
                        return (
                          approveJoin(reject),
                          getUserTrips()
                        );
                      }
                    }
                    >
                    Reject
                  </button>
                </td>
              </tr>
          );
        }
      }
    });
    const approvedUsers = joinedUsers.map((user)=>{
      if(trip.trip_id  === user.trip_id && user.user_approved === 1){
        return (
          <li>
            <div>{user.username}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
          </li>
        );
      }
    });
    const toggleID = `#myModal${trip.trip_id}`
    const modalID = `myModal${trip.trip_id}`
    const date =  new Date(trip.date);
    const Newdate = new Date(date.setTime( date.getTime() + 1 * 86400000 ));
    if(moment()._d < Newdate){
      return(
        <div key={trip.trip_id}>
          <h3 className='heading'>Trip I own</h3>
          <ul>
            <li><label>Trip date</label> <span>{trip.date}</span></li>
            <li><label>Departure Time</label> <span>{trip.time}</span></li>
            <li><label>Estimated duration (in minutes)</label> <span>{trip.duration}</span></li>
            <li><label>From</label> <span>{trip.location_from}</span></li>
            <li><label>To</label> <span>{trip.location_to}</span></li>
            <li><label>Other details</label> <span>{trip.details}</span></li>
            <li>
              <label>Available seats</label>
              <span>{trip.available_seats}</span>
            </li>
            <li>
              <label>Accepted passengers </label>
              <ol className='approved-users'>
                {approvedUsers}
              </ol>
            </li>
          </ul>
          <div className='btn-wrp-right'>
            <button
              type='button'
              className='btn btn-default'
              onClick={
                ()=> hashHistory.push(`updatetrip/${trip.trip_id}`)
              }
              >
              Edit this trip
            </button>
            <button
              type='button'
              className='btn btn-default'
              data-toggle='modal'
              data-target={toggleID}
              >
              Cancel This Trip
            </button>
          </div>
          <div
            className='modal fade'
            id={modalID}
            tabIndex='-1'
            role='dialog'
            aria-labelledby='myModalLabel'
            >
            <div className='modal-dialog' role='document'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <button
                    type='button'
                    className='close'
                    data-dismiss='modal'
                    aria-label='Close'>
                      <span aria-hidden='true'>&times;</span>
                  </button>
                  <h4
                    className='modal-title'
                    id='myModalLabel'
                    >
                    Type a message
                  </h4>
                </div>
                <div className='modal-body'>
                  <div className='form-group'>
                    <textarea
                      type='text'
                      placeholder='Why do you want to cancel this trip?'
                      className='form-control'
                      rows='5'
                      value={delMessage}
                      onChange={messageChange}
                      >
                    </textarea>
                    <p className='error'>{msg}</p>
                  </div>

                  <button
                    className='btn btn-danger'
                    data-dismiss='modal'
                    aria-label='Close'
                    disabled={disabled}
                    onClick={
                      () => {
                        CancelTripp({msg: delMessage, trip_id: trip.trip_id}),
                        getUserTrips()
                      }
                    }
                    >
                    Cancel Trip
                  </button>
                </div>
              </div>
            </div>
          </div>
          <section className='joined-users'>
              <h3 className='heading'>Join requests</h3>
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
          </section>
        </div>
      );
    }else{
      return <div></div>;
    }
  });
  return (
    <div>
      {trips}
    </div>
  )

}




export default UserTripsRow;
