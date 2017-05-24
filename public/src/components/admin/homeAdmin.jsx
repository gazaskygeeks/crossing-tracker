import React from 'react';
import HomeTrips from '../../actions/tripsActions.js';
import {connect} from 'react-redux'
import RegestratedList from './registeredUsers.jsx'
import AcceptUser from '../../actions/acceptUser.js';
import RejectUser from '../../actions/rejectUser.js';
import DisApprovedUsers from '../../actions/getDisApprovedUsers.js'


class HomeAdmin extends React.Component {
  componentDidMount(){
    this.props.disApproved()
  }
    render() {
        return (
            <section className="admin">
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone no.</th>
                                <th>Organization</th>
                                <th>Verification</th>
                            </tr>
                        </thead>
                        <RegestratedList regList={this.props.list}
                          onAccept={this.props.accept}
                          onReject={this.props.reject}/>
                    </table>
                </div>
            </section>
        );

    }
}
const mapStateToProps = (store) => {
  return {list: store.disApproved}
}
const mapDispatchToProps = () => {
  return {
    accept: (data) => {
      AcceptUser(data);
    },
    reject: (data) => {
      RejectUser(data);
    },
    disApproved : ()=>{
      DisApprovedUsers()
    }
  }
}

const AdminHome = connect(mapStateToProps, mapDispatchToProps)(HomeAdmin)
export default AdminHome
